
import Banner from "../../Components/HomeComponents/Banner"
import CollaborateWithReCloset from "../../Components/HomeComponents/CollaborateWithReCloset"
import DonateClothBanner from "../../Components/HomeComponents/DonateClothBanner"
import Features from "../../Components/HomeComponents/Features"
import HeroBanner from "../../Components/HomeComponents/HeroBanner"
import NgoMarques from "../../Components/HomeComponents/NgoMarques"
import OurClosetBanner from "../../Components/HomeComponents/OurClosetBanner"
import ContactUs from "../ContactUs/ContactUs"


const Home = () => {
  return (
    <div>
        <HeroBanner></HeroBanner>
        <Features></Features>
        <DonateClothBanner></DonateClothBanner>
         <NgoMarques></NgoMarques>
        <OurClosetBanner></OurClosetBanner>
        <CollaborateWithReCloset></CollaborateWithReCloset>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Home