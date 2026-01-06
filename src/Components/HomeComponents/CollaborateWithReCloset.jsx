import { FaHandsHelping, FaLeaf, FaCertificate } from "react-icons/fa";
import usePrimaryBtn from "../../Hooks/usePrimaryBtn";

const CollaborateWithReCloset = () => {
    const primaryBtn = usePrimaryBtn();
  return (
    <section className="py-20 px-4 lg:px-20 lg:m-20 bg-linear-to-r from-accent to-primary text-black rounded-2xl shadow-2xl shadow-accent">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <span className="badge badge-outline border-black text-black mb-4">
            Collaborate With Us
          </span>

          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-4">
            NGOs & ReCloset Working
            <br />
            <span className=" decoration-black/40">
              Together for Good
            </span>
          </h2>

          <p className="mt-6 text-black/80">
            ReCloset collaborates with trusted and certified NGOs to spread
            sustainable fashion and social impact. Together, we ensure clothes
            reach the people who need them most.
          </p>
          <div className="text-center flex justify-center items-center">
                <button className="btn btn-outline font-bold my-4 btn-primary bg-black ">
                 Collaborate Now
            </button>
          </div>
        </div>

        {/* Collaboration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div
            className="bg-black/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaHandsHelping className="text-4xl mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg">
              NGO Partnerships
            </h3>
            <p className="mt-2 text-sm text-black/80">
              NGOs can collaborate with ReCloset to expand reach and maximize
              positive community impact.
            </p>
          </div>

          <div
            className="bg-black/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaCertificate className="text-4xl mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg">
              Certified & Trusted
            </h3>
            <p className="mt-2 text-sm text-black/80">
              We work only with verified and certified NGOs to ensure transparency
              and trust.
            </p>
          </div>

          <div
            className="bg-black/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaLeaf className="text-4xl mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg">
              Ongoing Impact
            </h3>
            <p className="mt-2 text-sm text-black/80">
              Several NGOs are actively working with ReCloset right now to spread
              sustainability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CollaborateWithReCloset;
