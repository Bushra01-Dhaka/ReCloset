
import largeCloset from "../../assets/largeCloset.jpg"
import usePrimaryBtn from "../../Hooks/usePrimaryBtn";

const OurClosetBanner = () => {
  const primaryBtn = usePrimaryBtn();

  return (
    <section
      className="relative py-24 px-4 lg:px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `url(${largeCloset})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div
        className="relative max-w-3xl mx-auto text-center text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-sm uppercase tracking-widest text-primary">
          Our Impact This Year
        </span>

        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
          We Kept <span className="text-primary">20K</span> Items in Closets
        </h2>

        <p className="mt-6 text-white/80 leading-relaxed">
          Once your clothes are in our hands, we put 90% back in closets and
          recycle everything else. 100% guilt-free.
        </p>

        <div className="mt-8 flex justify-center">
          <button className={primaryBtn}>
            ReCloset Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClosetBanner;
