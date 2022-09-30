import { Box, Text, Stack, HStack, SimpleGrid, VStack, Select, } from "@chakra-ui/react"
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { Pagination } from "../Components/Pagination"
import { Products } from "../Components/Products"

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


export const TrendingPage = () => {
    return (
        <Box>

            <Navbar />

            <SimpleGrid templateColumns={"15% 85%"}>

                <Box p={"4"}>

                    <VStack alignItems={"flex-start"} p={"0px 10px"} borderRight={"1px solid #CBD5E0"} h={"100%"} >
                        <Text color={"#4A5568"} fontSize={"15px"} as={"b"}>Subcategories</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Watches</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Clothing</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Bluetooth Earphone</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Smart Watches</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Electronics</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Flash Sale</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Toys</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Men's Watches</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Mobile Accessories</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Home Improvement</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Handbags & Clutches</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Sandals</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Men's Essentials</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Stiletto Heels & Slip On</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Wired Headphones</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Small Appliances</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Action Figures</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Top Selling Smart </Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Home Decor</Text>
                        <Text cursor={"pointer"} color={"gray"} _hover={{ textDecoration: "underline", color: "#4A5568" }} fontSize={"12px"} as={"b"}>Makeup Accessories</Text>
                    </VStack>

                </Box>
                <Box p={"4"}>
                    <VStack alignItems={"flex-end"} pr={"25px"}>
                        <Select  placeholder='Select option' w={"200px"}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </VStack>
                    <SimpleGrid columns={4}>
                        {
                            data.map((item) => (
                                <Products image={item.image} />
                            ))
                        }
                    </SimpleGrid>
                </Box>

            </SimpleGrid>

            <Pagination/>

            <Footer />

        </Box>
    )
}