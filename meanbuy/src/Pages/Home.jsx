import { Image } from "@chakra-ui/react"
import BannerSlider from "../Components/BannerSlider"
import { Footer } from "../Components/Footer"
import { MultiItemCarousel } from "../Components/MultiItemCarousel"
import { Navbar } from "../Components/Navbar"

const data = [
    { image: "/demo/pic1.jpg" },
    { image: "/demo/pic2.jpg" },
    { image: "/demo/pic3.jpg" },
    { image: "/demo/pic4.jpg" },
    { image: "/demo/pic1.jpg" },
    { image: "/demo/pic2.jpg" },
    { image: "/demo/pic3.jpg" },
    { image: "/demo/pic4.jpg" },
    { image: "/demo/pic1.jpg" },
    { image: "/demo/pic2.jpg" },
    { image: "/demo/pic3.jpg" },
    { image: "/demo/pic3.jpg" },
]


export const Home = () => {
    return(
        <div>
            <Navbar />
            <BannerSlider />
             <MultiItemCarousel title={"Trending"} Scroll={5} boolean={true} />
             <MultiItemCarousel title={"Women"} Scroll={5} boolean={true} />
             <MultiItemCarousel title={"Men"} Scroll={5} boolean={true} />
             <Footer/>
        </div>
    )
}