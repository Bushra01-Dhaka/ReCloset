import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyDonations = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Load donate cloths by user email
  const {
    data: donations = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-donations", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/cloths/donate?email=${user.email}`
      );
      return res.data;
    },
  });

  // Delete donation
 const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won’t be able to revert this donation!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/cloths/${id}`);
        Swal.fire("Deleted!", "Donation has been deleted.", "success");
        refetch();
      } catch (error) {
        Swal.fire("Error!", "Failed to delete donation.", "error");
      }
    }
  });
};

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <section className="px-4 lg:px-10 py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        My Donations
      </h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Title</th>
              <th>Cloth Type</th>
              <th>Quantity</th>
              <th>Collect Option</th>
              <th>Service Center</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.cloth_type}</td>
                <td>{item.cloth_num || "-"}</td>
                <td className="capitalize">{item.cloth_collect_option}</td>
                <td>{item.selected_service_center || "-"}</td>
                <td>
                  <span
                    className={`badge ${
                      item.status === "approved"
                        ? "badge-success"
                        : item.status === "rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.price ? `৳${item.price}` : "-"}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {donations.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-6">
                  No donations found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyDonations;
