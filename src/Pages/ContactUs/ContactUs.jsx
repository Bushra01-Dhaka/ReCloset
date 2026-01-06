import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import usePrimaryBtn from "../../Hooks/usePrimaryBtn";

const ContactUs = () => {
  const primaryBtn = usePrimaryBtn();

  return (
    <section className="min-h-screen py-20 px-4 lg:px-20 ">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <span className="badge badge-primary badge-outline">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mt-4">
            Let’s Talk About <span className="text-primary">ReCloset</span>
          </h1>
          <p className="mt-4 text-base-content/70">
            Have questions or want to work with us? 
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div
            className="space-y-6"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl" />
              <span>support@recloset.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <span>+880 1234 567890</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <p className="text-base-content/70">
              We aim to respond within 24 hours. <br />Sustainability starts with communication.
            </p>
          </div>

          {/* Form */}
          <div
            className="card bg-transparent
                       shadow-[0_0_40px_rgba(16,185,129,0.35)] 
                       hover:shadow-[0_0_60px_rgba(16,185,129,0.6)]
                       transition"
            data-aos="fade-left"
          >
            <div className="card-body space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered bg-transparent w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered bg-transparent w-full"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered bg-transparent w-full h-32"
              ></textarea>

              <button className={primaryBtn}>
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
