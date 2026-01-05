import coverImg from "../../assets/recloset.jpg"
const Banner = () => {
  return (
    <section className="">
      <div className="hero min-h-[90vh]">
        <div className="hero-content flex-col-reverse lg:flex-row gap-12">

          {/* Text Content */}
          <div
            className="text-center lg:text-left max-w-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Give Your Clothes a <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">Second Life</span>
            </h1>

            <p className="py-6 text-base-content/80">
              ReCloset lets you sell, share, and discover pre-loved fashion.
              Sustainable style made simple for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary shadow-2xl shadow-primary border-0 bg-linear-to-r text-black hover:bg-linear-to-l from-primary to-accent">
                Sell Your Clothes
              </button>
              <button className="btn btn-outline btn-primary hover:shadow-2xl shadow-accent hover:text-black hover:bg-linear-to-r from-primary to-accent">
                Browse Collection
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="w-full max-w-md"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={coverImg}
              alt="ReCloset banner"
              className="rounded-2xl shadow-2xl shadow-primary"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
