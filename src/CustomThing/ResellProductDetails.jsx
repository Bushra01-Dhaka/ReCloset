
import { useQuery } from "@tanstack/react-query";
import { FaHeart, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link, useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const ResellProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const { data: cloth, isLoading } = useQuery({
    queryKey: ["resell-product-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cloths/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-32">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!cloth) {
    return (
      <div className="text-center py-32 text-base-content/60">
        Product not found.
      </div>
    );
  }

  const handleWishlist = async() => {
    try{
      await axiosSecure.post("/wishlist",{
        user_email: user?.email,
        cloth_id: cloth._id,
      });
      Swal.fire("Saved!", "Added to your wishlist 💚", "success")
    } 
    catch(error){
      Swal.fire("Oops!", "Already in wishlist", "info")
    }
  }


  

  

  return (
    <section className="py-20 px-4 lg:py-30 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Image */}
          <div className="card  shadow-xl">
            <figure className="h-[500px] overflow-hidden">
              <img
                src={cloth.photo}
                alt={cloth.title}
                className="h-full  w-full object-cover"
              />
            </figure>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">

            <h1 className="text-3xl md:text-4xl font-heading font-bold">
              {cloth.title}
            </h1>

            {/* Price & Status */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                {cloth.price} TK
              </span>

              <span
                className={`badge badge-lg ${
                  cloth.resell_status === "not_sold"
                    ? "badge-success"
                    : "badge-neutral"
                }`}
              >
                {cloth.resell_status === "not_sold"
                  ? "Available"
                  : "Sold Out"}
              </span>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-outline">
                {cloth.cloth_type}
              </span>
              <span className="badge badge-outline">
                Condition: {cloth.condition}
              </span>
            </div>

            {/* Seller */}
            <div className="flex items-center gap-2 text-base-content/70">
              <FaMapMarkerAlt />
              <span>{cloth.donar_district}</span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-base-content/80 leading-relaxed">
                {cloth.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-4">
              <button onClick={handleWishlist} className="btn btn-outline">
                <FaHeart />
                Save
              </button>

             <Link to={`/dashboard/payment/${id}`}>
                <button
                disabled={cloth.resell_status !== "not_sold"}
                className="btn btn-primary"
              >
                <FaShoppingCart />
                Buy Now
              </button>
             </Link>
            </div>

            {/* Info Note */}
            <div className="alert alert-info mt-6">
              <span>
                ♻️ By purchasing this item, you are supporting sustainable fashion.
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellProductDetails;
