import { Image } from "@chakra-ui/react"
import BannerSlider from "../Components/BannerSlider"
import { Navbar } from "../Components/Navbar"

export const Home = () => {
    return(
        <div>
            <Navbar />
            <BannerSlider/>
        </div>
    )
}