import { Box, Center, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import { Feedback } from "../Components/Feedback"
import { Footer1 } from "../Components/Footer1"
import { Footer3 } from "../Components/Footer3"
import { ImageSlider } from "../Components/ImageSlider"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Navbar } from "../Components/Navbar"

export const SingleProductPage = () => {
    return (
        <Box >

            <Navbar />

            <VStack>
                <Flex>
                    <Box minWidth={"400px"} minHeight={"400px"} border={"1px solid red"} m={"10px"}>
                        <ImageSlider Scroll={1} width={"200px"} />
                    </Box>
                    <Box minWidth={"600px"} minHeight={"400px"} border={"1px solid red"} m={"10px"}>

                    </Box>
                </Flex>

                <Box w="100%" p={"40px 0px"}>
                    <Text textAlign={"center"} fontSize={"22px"} color={"gray.600"}  >Featured Products</Text>
                    <ImageSlider Scroll={5} width={"90%"} />
                </Box>


            </VStack>

            <Feedback />

            <Box  m={"20px 0px 40px 40px"} >
                <Text textAlign={"left"} fontSize={"20px"} pb={"20px"} color={"#f38f2f"} textDecoration={"underline"} >Review & Rating</Text>
                <HStack>
                    <Text fontSize={"15px"}  color={"#f38f2f"} >Contack us on </Text>
                    <WhatsAppIcon />
                </HStack>
            </Box>

            <Footer1 />
            <Footer3 />

        </Box>
    )
}