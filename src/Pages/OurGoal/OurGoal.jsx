import { FaBullseye } from "react-icons/fa";
import usePrimaryBtn from "../../Hooks/usePrimaryBtn";
import coverImg from "../../assets/donate2.jpg"
import DonateClothBanner from "../../Components/HomeComponents/DonateClothBanner";
import NgoMarques from "../../Components/HomeComponents/NgoMarques";
import PictureCards from "../../CustomThing/PictureCards";

const OurGoal = () => {
  const primaryBtn = usePrimaryBtn();

  return (
    <section className="py-20 bg-black px-4 lg:px-20 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Icon or Image */}
        <div
          className="w-full max-w-md"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={coverImg}
            alt="ReCloset banner"
            className="rounded-2xl shadow-2xl shadow-primary"
          />
        </div>
        {/* Right Content */}
        <div
          className="space-y-6 text-center lg:text-left"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <span className="badge badge-primary badge-outline">Our Goal</span>

          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
            One Closet’s Goodbye Is Another{" "}
            <span className="text-primary">Heart’s Hello</span>
          </h2>

          <p className="text-base-content/70">
            ReCloset is more than a donation platform — it’s a bridge between
            kindness and need. The clothes you no longer wear may once have been
            your favorite, and today they can become someone else’s comfort,
            confidence, and joy. By donating, you’re not just clearing space in
            your closet — you’re making space in someone’s life for hope,
            dignity, and warmth. At ReCloset, our goal is to extend the life of
            every garment. We aim to make pre-loved fashion easy, guilt-free,
            and impactful while helping the planet one closet at a time.
          </p>

          <div className="mt-6">
            <button className={primaryBtn}>Donate Cloths Now</button>
          </div>
        </div>
      </div>

      <div className="py-20">
        <DonateClothBanner/>
      </div>
      <div>
        <NgoMarques/>
      </div>

      <PictureCards></PictureCards>
    </section>
  );
};

export default OurGoal;
