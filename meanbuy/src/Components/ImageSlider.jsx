
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Image, Text } from '@chakra-ui/react';


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

const Prev = (props) => {
    console.log(props);
    const { className, onClick} = props;
    return (
      <>
          <div className={className} onClick={onClick}>
          <ChevronLeftIcon boxSize={8} color={"#f38f2f"} />
          </div>
      </>
    );
  };

  const Next = (props) => {
    console.log(props);
    const { className, onClick} = props;
    return (
      <>
          <div className={className} onClick={onClick}>
          <ChevronRightIcon boxSize={8} color={"#f38f2f"} />
          </div>
      </>
    );
  };


  export const ImageSlider = ({Scroll, width}) => {
    return (
      <Box m={"auto"} w={width} position={"relative"}>

        <Slider prevArrow={<Prev/>} nextArrow={<Next/>} slidesToShow={Scroll} slidesToScroll={Scroll} >
          {
          data.map((item) => (
            <Box p={"10px"}>
              <Image src={item.image} alt="demo"/>
            </Box>
          ))
          }
        </Slider>
      </Box>
    );
  };