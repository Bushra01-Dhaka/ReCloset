import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";

const MyWishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: wishlist = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["wishlist", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist?email=${user.email}`);
      return res.data;
    },
  });

  const handleRemove = async (id) => {
    await axiosSecure.delete(`/wishlist/${id}`);
    Swal.fire("Removed!", "Item removed from wishlist", "success");
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
        <h2 className="text-3xl font-heading font-bold mb-8">
          My <span className="text-primary">Wishlist</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="card bg-base-200 shadow-xl">
              <figure className="h-56">
                <img
                  src={item.cloth.photo}
                  alt={item.cloth.title}
                  className="h-full w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="font-semibold">{item.cloth.title}</h3>
                <p>{item.cloth.price} TK</p>

                <div className="flex justify-between items-center mt-3">
                  <Link to={`/cloths/${item.cloth_id}`}>
                    <button className="btn btn-sm btn-primary">View</button>
                  </Link>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {wishlist.length === 0 && (
          <div className="text-center py-20 text-base-content/60">
            Your wishlist is empty 💔
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWishlist;
