import { FaCheckCircle } from "react-icons/fa";
import usePrimaryBtn from "../../Hooks/usePrimaryBtn";
import donateImg from "../../assets/donate1.jpg"

const DonateClothBanner = () => {
    const primaryBtn = usePrimaryBtn();
  return (
    <section className="py-40 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex justify-center"
          >
            <img
              src={donateImg}
              alt="Donate clothes"
              className="rounded-2xl shadow-primary shadow-2xl max-w-md w-full"
            />
          </div>

          {/* Right Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="space-y-6"
          >
            <span className="badge badge-primary badge-outline">
              Donate with Purpose
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
              Donate Your Clothes &
              <span className="text-primary"> Never Go Out of Style</span>
              <br /> Without Guilt
            </h2>

            <p className="text-base-content/70">
              Make space in your wardrobe while helping your clothes find a new life.
              Sustainable fashion starts with you.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Clean your closet and post your old clothes easily</span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>Drop off your clothes at our ReCloset service center</span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <span>
                  Or with a small service charge, we collect clothes right from your doorstep
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className={primaryBtn}>
              ReCloset Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DonateClothBanner;
