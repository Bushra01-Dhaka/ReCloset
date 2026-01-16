import { useQuery } from "@tanstack/react-query";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import useAxios from "../../Hooks/useAxios";


const BrowseCollection = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxios();

  const { data: resellCloths = [], isLoading } = useQuery({
    queryKey: ["browse-resell-cloths"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cloths/resell");
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
    <section className="py-20 lg:py-40 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Browse <span className="text-primary">Resell Collection</span>
          </h2>
          <p className="text-base-content/70 mt-3 max-w-2xl mx-auto">
            Discover quality pre-loved fashion items shared by our community.
            Shop sustainably and stylishly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-10">
          {resellCloths.map((cloth) => (
           <Link to={`/cloths/${cloth._id}`}>
            <div
              key={cloth._id}
              className="card  shadow-xl hover:shadow-2xl transition"
            >
              {/* Image h-64*/}
              <figure className=" overflow-hidden">
                <img
                  src={cloth.photo}
                  alt={cloth.title}
                  className="h-full rounded-2xl shadow-xl hover:shadow-primary lg:h-[450px] lg:w-[350px] w-full object-cover transition-transform duration-500 ease-in-out
      hover:scale-110"
                />
              </figure>

              {/* Body */}
              {/* <div className="card-body"> */}
                {/* <h3 className="card-title text-lg font-semibold">
                  {cloth.title}
                </h3>

                <p className="text-sm text-base-content/70 line-clamp-2">
                  {cloth.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="badge badge-outline">
                    {cloth.cloth_type}
                  </span>
                  <span className="badge badge-outline">
                    {cloth.condition}
                  </span>
                </div> */}

                {/* Price */}
                {/* <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {cloth.price} TK
                  </span>

                  <span
                    className={`badge text-black font-semibold ${
                      cloth.resell_status === "not_sold"
                        ? "badge-success"
                        : "badge-neutral"
                    }`}
                  >
                    {cloth.resell_status === "not_sold"
                      ? "Available"
                      : "Sold Out"}
                  </span>
                </div> */}

              
                {/* <div className="card-actions mt-4 justify-end">

                  <button
                    disabled={cloth.resell_status !== "not_sold"}
                    className="btn btn-primary btn-sm text-black"
                  >
                    <FaShoppingCart />
                    Buy Now
                  </button>
                </div> */}
              {/* </div> */}
              
            </div>
           </Link>
          ))}
        </div>

        {/* Empty State */}
        {resellCloths.length === 0 && (
          <div className="text-center py-20 text-base-content/60">
            No resell items available right now.
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseCollection;
