import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllDonations = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: donations = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-donations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cloths/donate");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This donation will be permanently deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/cloths/${id}`);
        Swal.fire("Deleted!", "Donation removed successfully", "success");
        refetch();
      }
    });
  };

  return (
    <div className="p-8 max-w-6xl py-10 lg:py-20">
      {/* TITLE */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-2">
        All Donations
      </h2>
      <p className="text-gray-500 mb-6">
        Manage all donated clothing items submitted by users
      </p>

      {/* LOADING */}
      {isLoading && (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {/* TABLE */}
      {!isLoading && donations.length > 0 && (
        <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Donor</th>
                <th>Cloth Type</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Center</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {donations.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="font-medium">{item.title}</td>
                  <td>
                    <p>{item.donar_name}</p>
                    <p className="text-xs text-gray-500">
                      {item.donar_email}
                    </p>
                  </td>
                  <td>{item.cloth_type}</td>
                  <td>{item.cloth_num}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "pending"
                          ? "badge-warning"
                          : "badge-success"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>{item.selected_service_center}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* EMPTY */}
      {!isLoading && donations.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No donations found
        </p>
      )}
    </div>
  );
};

export default AllDonations;
