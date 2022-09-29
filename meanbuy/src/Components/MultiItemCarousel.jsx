import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { Products } from './Products';
import { useRef } from 'react';


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


  export const MultiItemCarousel = ({title}) => {
    const refContainer = useRef()
    return (
      <Box m={"30px"} w={"95%"} position={"relative"}>

            <Box zIndex={"10"} bg={"white"} p={"0px 5px 0px 0px"} position={"absolute"} top={"-22px"} left={"0px"}>
                <Text as={"b"} fontSize={"2xl"}>{title}</Text>
            </Box>

            <Box zIndex={"10"} bg={"white"} p={"2px 10px 0px 5px"} position={"absolute"} top={"-20px"} right={"0px"}>
                <button>
                   <Text fontSize={"xl"} color={"gray"}>see more</Text>
                </button>
            </Box>

        <Slider prevArrow={<Prev/>} nextArrow={<Next/>} slidesToShow={5} slidesToScroll={5} >
          {
          data.map((item) => (
            <Products image={item.image} />
          ))
          }
        </Slider>
      </Box>
    );
  };