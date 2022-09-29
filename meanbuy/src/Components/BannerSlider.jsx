import { Box } from "@chakra-ui/react";
import HeroSlider, { Slide } from "hero-slider";

const banner1 = "/Images/banner1.webp";
const banner2 = "/Images/banner2.webp";
const banner3 = "/Images/banner3.webp";
const banner4 = "/Images/banner4.webp";
const banner5 = "/Images/banner5.webp";

export default function BannerSlider() {
    return (
        <Box 
        margin={"auto"}
        width={"99%"} 
        padding={"10px 2px"} 
        borderBottom={"1px solid gray"} 
        mb={"50px"}>
            <HeroSlider
                height={"380px"}
                autoplay
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                }}
            >
                <Slide
                    background={{
                        backgroundImageSrc: banner1
                    }}
                />

                <Slide
                    background={{
                        backgroundImageSrc: banner2
                    }}
                />

                <Slide
                    background={{
                        backgroundImageSrc: banner3
                    }}
                />

                <Slide
                    background={{
                        backgroundImageSrc: banner4
                    }}
                />

                <Slide
                    background={{
                        backgroundImageSrc: banner5
                    }}
                />

            </HeroSlider>
        </Box>
    );
}