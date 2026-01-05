import { FaRecycle, FaTruck, FaMagic } from "react-icons/fa";
import { FaPersonDress } from "react-icons/fa6";
import { GiLargeDress } from "react-icons/gi";

const Features = () => {
  return (
    <section className="py-20  lg:px-20 px-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="badge badge-primary badge-outline mb-4">
            Why ReCloset?
          </span>

          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
            Sustainable Fashion, <span className="text-primary">Redefined</span>
          </h2>

          <p className="mt-4 text-base-content/70">
            We make reusing fashion easy, meaningful, and impactful for
            everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div
            className="card bg-transparent shadow-slate-800 hover:shadow-accent shadow-md hover:shadow-2xl transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card-body items-center text-center">
              <div className="text-primary text-4xl mb-4">
                <GiLargeDress />
              </div>
              <h3 className="card-title font-heading">Post Your Old Clothes</h3>
              <p className="text-base-content/70">
                Clean your closet by posting old clothes easily and give them a
                chance to be reused.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="card bg-transparent shadow-primary  hover:shadow-accent shadow-2xl hover:shadow-2xl transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card-body items-center text-center">
              <div className="text-primary text-4xl mb-4">
                <FaRecycle />
              </div>
              <h3 className="card-title font-heading">
                Give Clothes a New Home
              </h3>
              <p className="text-base-content/70">
                Your old favorite can become someone else’s new favorite —
                fashion lives on.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="card bg-transparent shadow-slate-800  hover:shadow-accent shadow-md hover:shadow-2xl transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card-body items-center text-center">
              <div className="text-primary text-4xl mb-4">
                <FaMagic />
              </div>
              <h3 className="card-title font-heading">
                Modified & Free Resale
              </h3>
              <p className="text-base-content/70">
                We resell clothes for free or with a fresh modified look —
                making fashion accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
