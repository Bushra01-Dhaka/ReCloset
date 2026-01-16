import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const HandleResellItems = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedItem, setSelectedItem] = useState(null);

  const {
    data: resellCloths = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-resell-items"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cloths/resell");
      return res.data;
    },
  });

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this item?",
      text: "This resell item will be permanently removed",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/cloths/${id}`);
        Swal.fire("Deleted!", "Resell item removed.", "success");
        refetch();
      }
    });
  };

  /* ================= EDIT ================= */
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedItem = {
      title: form.title.value,
      price: form.price.value,
      condition: form.condition.value,
      resell_status: form.resell_status.value,
    };

    await axiosSecure.patch(`/cloths/resell/${selectedItem._id}`, updatedItem);

    Swal.fire("Updated!", "Resell item updated successfully.", "success");
    setSelectedItem(null);
    refetch();
  };

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
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Handle <span className="text-primary">Resell Items</span>
          </h2>
          <p className="text-base-content/70 mt-2">
            Manage, edit or remove resell products listed by users
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto card bg-base-200 shadow-xl">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Seller Name</th>
                <th>Type</th>
                <th>Condition</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {resellCloths.map((item) => (
                <tr key={item._id}>
                  <td className="font-semibold">{item.title}</td>
                  <td>{item.donar_name}</td>
                  <td>{item.cloth_type}</td>
                  <td>{item.condition}</td>
                  <td>{item.price} TK</td>
                  <td>
                    {item.resell_status === "not_sold" ? (
                      <span className="badge badge-warning font-bold capitalize">
                        {item.resell_status}
                      </span>
                    ) : (
                      <span className="badge badge-success font-bold capitalize">
                        {item.resell_status}
                      </span>
                    )}
                  </td>
                  <td className="text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
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

          {resellCloths.length === 0 && (
            <div className="text-center py-10 text-base-content/60">
              No resell items found.
            </div>
          )}
        </div>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {selectedItem && (
        <dialog open className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Edit Resell Item</h3>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                name="title"
                defaultValue={selectedItem.title}
                className="input input-bordered w-full"
                placeholder="Title"
              />

              <input
                name="price"
                defaultValue={selectedItem.price}
                className="input input-bordered w-full"
                placeholder="Price"
              />

              <select
                name="condition"
                defaultValue={selectedItem.condition}
                className="select select-bordered w-full"
              >
                <option>New</option>
                <option>Good</option>
                <option>Used</option>
              </select>

              <select
                name="resell_status"
                defaultValue={selectedItem.resell_status}
                className="select select-bordered w-full"
              >
                <option value="not_sold">Not Sold</option>
                <option value="sold_out">Sold Out</option>
              </select>

              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default HandleResellItems;
