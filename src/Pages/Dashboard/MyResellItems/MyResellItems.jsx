import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const MyResellItems = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [selectedCloth, setSelectedCloth] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: resellCloths = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-resell-items"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cloths/resell?email=${user?.email}`);
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

  const handleEdit = (cloth) => {
    setSelectedCloth(cloth);
    setIsModalOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedData = {
      title: form.title.value,
      price: form.price.value,
      condition: form.condition.value,
    };

    try {
      await axiosSecure.patch(`/cloths/${selectedCloth._id}`, updatedData);
      Swal.fire("Updated!", "Resell item updated successfully.", "success");
      setIsModalOpen(false);
      setSelectedCloth(null);
      refetch();
    } catch (error) {
      Swal.fire("Error!", "Failed to update item.", "error");
    }
  };

  return (
    <section className="py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            My <span className="text-primary">Resell Items</span>
          </h2>
          <p className="text-base-content/70 mt-2">
            Manage your resell listings and keep track of their status
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto card bg-base-200 shadow-xl">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Cloth Type</th>
                <th>Condition</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {resellCloths.map((cloth) => (
                <tr key={cloth._id}>
                  <td className="font-semibold">{cloth.title}</td>
                  <td>{cloth.cloth_type}</td>
                  <td>{cloth.condition}</td>
                  <td>{cloth.price} TK</td>
                  <td>
                    <span
                      className={`badge capitalize ${
                        cloth.resell_status === "not_sold"
                          ? "badge-warning"
                          : cloth.resell_status === "sold_out"
                          ? "badge-info"
                          : "badge-success"
                      }`}
                    >
                      {cloth.resell_status}
                    </span>
                  </td>

                  <td>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(cloth)}
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(cloth?._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && selectedCloth && (
            <dialog className="modal modal-open">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Edit Resell Item</h3>

                <form onSubmit={handleUpdate} className="space-y-4">
                  <div>
                    <label className="label">Title</label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={selectedCloth.title}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Condition</label>
                    <select
                      name="condition"
                      defaultValue={selectedCloth.condition}
                      className="select select-bordered w-full"
                    >
                      <option>New</option>
                      <option>Good</option>
                      <option>Used</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">Price (TK)</label>
                    <input
                      type="number"
                      name="price"
                      defaultValue={selectedCloth.price}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="modal-action">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="btn btn-ghost"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          )}

          {/* Empty State */}
          {resellCloths.length === 0 && (
            <div className="text-center py-10 text-base-content/60">
              No resell items found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyResellItems;
