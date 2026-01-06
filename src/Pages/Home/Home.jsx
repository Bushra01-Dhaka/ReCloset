
import Banner from "../../Components/HomeComponents/Banner"
import DonateClothBanner from "../../Components/HomeComponents/DonateClothBanner"
import Features from "../../Components/HomeComponents/Features"
import HeroBanner from "../../Components/HomeComponents/HeroBanner"
import NgoMarques from "../../Components/HomeComponents/NgoMarques"
import OurClosetBanner from "../../Components/HomeComponents/OurClosetBanner"


const Home = () => {
  return (
    <div>
        <HeroBanner></HeroBanner>
        <Features></Features>
        <DonateClothBanner></DonateClothBanner>
         <NgoMarques></NgoMarques>
        <OurClosetBanner></OurClosetBanner>
    </div>
  )
}

export default Home