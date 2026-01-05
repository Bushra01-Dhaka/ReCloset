
import Banner from "../../Components/HomeComponents/Banner"
import DonateClothBanner from "../../Components/HomeComponents/DonateClothBanner"
import Features from "../../Components/HomeComponents/Features"
import OurClosetBanner from "../../Components/HomeComponents/OurClosetBanner"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Features></Features>
        <DonateClothBanner></DonateClothBanner>
        <OurClosetBanner></OurClosetBanner>
    </div>
  )
}

export default Home