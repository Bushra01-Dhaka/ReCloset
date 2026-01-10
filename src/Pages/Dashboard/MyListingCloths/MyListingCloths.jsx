import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyListingCloths = () => {

  // Example: later you can get email from auth
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure()


  const { data: cloths = [], isLoading } = useQuery({
    queryKey: ["my-cloths", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/cloths?email=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            My Listing <span className="text-primary">Cloths</span>
          </h2>
          <p className="text-base-content/70 mt-2">
            Track and manage your donated or resold clothes
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto card bg-base-200 shadow-xl">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Cloth Title</th>
                <th>Type</th>
                <th>Condition</th>
                <th>Cloth Type</th>
                <th>Status</th>
                <th>Created Date</th>
              </tr>
            </thead>

            <tbody>
              {cloths.map((cloth) => (
                <tr key={cloth._id}>
                  <td className="font-semibold">{cloth.title}</td>

                  <td className="capitalize">
                    {cloth.type}
                  </td>

                  <td>{cloth.condition}</td>

                  <td>{cloth.cloth_type}</td>

                  <td>
                    <span
                      className={`badge capitalize ${
                        cloth.status === "pending"
                          ? "badge-warning"
                          : cloth.status === "accepted"
                          ? "badge-info"
                          : "badge-success"
                      }`}
                    >
                      {cloth.status}
                    </span>
                  </td>

                  <td>
                    {new Date(cloth.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {cloths.length === 0 && (
            <div className="text-center py-10 text-base-content/60">
              No listings found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyListingCloths;
