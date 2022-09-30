import { Link, NavLink } from "react-router-dom"
import styles from "./Styles.module.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NotesIcon from '@mui/icons-material/Notes';
import PolicyIcon from '@mui/icons-material/Policy';
import InfoIcon from '@mui/icons-material/Info';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';

import {
    Input, VStack, Flex, Spacer, Box, Center, Image, Text, Drawer,
    DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { useContext, useRef, useState } from "react"
import { Category } from "./Category";
import { AppContext } from "../AppContext/AppContext";


const Links = [
    { path: "/flash_sale", title: "Flash Sale" },
    { path: "/best_deal", title: "Best Deal" },
    { path: "/shop_by_brand", title: "Shop By Brand" },
    { path: "/trending", title: "Trending" },
    { path: "/new_arrivals", title: "New Arrivals" },
]

export const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const { setBoolean } = useContext(AppContext)

    if (isOpen) {
        setBoolean(true)
    }

    // console.log(isOpen)
    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>

            <VStack p={"10px"}>
                <Flex w="full" p={"0px 10px"}>
                    <Flex>
                        <Link to={"/"}>
                            <Image cursor={"pointer"} w={"190px"} mr={"20px"} src="/Images/baselogo.png" alt="logo" />
                        </Link>
                        <Spacer />
                        <Box p='4'>
                            <Center overflow={"hidden"} w={"350px"} h={"35px"} bg="#edf2f7" borderRadius={"4px"}>
                                <Input w={"100%"} placeholder='Search' variant='filled' focusBorderColor='none' h={"35px"} borderRadius={"0px"} />
                                <Spacer />
                                <Button>
                                    <SearchIcon cursor={"pointer"} boxSize={4} color={"gray"} />
                                </Button>
                            </Center>
                        </Box>
                    </Flex>
                    <Spacer />
                    <Flex>
                        <Center mr={"20px"} cursor={"pointer"}>
                            <Text fontSize="11px" as={"b"} color={"#718096"}>Seller's Corner</Text>
                            <Text fontSize="11px" as={"b"} m={"0px 5px"} color={"#718096"}>|</Text>
                            <Text fontSize="11px" as={"b"} color={"#718096"}>Feedback</Text>
                            <Text fontSize="11px" as={"b"} m={"0px 5px"} color={"#718096"}>|</Text>
                            <Text fontSize="11px" as={"b"} color={"#718096"} >Blog</Text>
                            <Text fontSize="11px" as={"b"} m={"0px 5px"} color={"#718096"}>|</Text>
                            <Text fontSize="11px" as={"b"} color={"#718096"}>Delivery Info</Text>
                        </Center>
                        <Center>
                            <Center w={"100px"} cursor={"pointer"}>
                                <Button>
                                    <ShoppingCartOutlinedIcon sx={{ color: "#f38f2f" }} />
                                </Button>
                            </Center>

                            <Box>
                                <Button cursor={"pointer"} ref={btnRef} onClick={onOpen}>
                                    <HamburgerIcon color={"#f38f2f"} w={6} h={6} />
                                </Button>
                                <Drawer isOpen={isOpen}
                                    placement='right'
                                    onClose={onClose}
                                    finalFocusRef={btnRef} size={"xs"}>
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerCloseButton />
                                        <DrawerHeader fontSize={"18px"} bg={"#f38f2f"} color={"black"}>kashifrezwi850@gmail.com</DrawerHeader>
                                        <DrawerBody>
                                            <VStack alignItems={"flex-start"} mt={"15px"}>
                                                <Link><Center><ShoppingBagIcon sx={{ color: "#f38f2f", margin: "5px 10px" }} /> My Orders</Center></Link>
                                                <Spacer />
                                                <Link> <Center><KeyboardReturnOutlinedIcon sx={{ color: "#f38f2f", margin: "5px 10px" }} /> Returns</Center></Link>
                                                <Spacer />
                                                <Link> <Center><SupportAgentIcon sx={{ color: "#f38f2f", margin: "5px 10px" }} /> Support</Center></Link>
                                                <Spacer />
                                                <Link><Center><NotesIcon sx={{ color: "#f38f2f", margin: "5px 10px" }} /> Terms of use</Center></Link>
                                                <Spacer />
                                                <Link><Center><PolicyIcon sx={{ color: "#f38f2f", margin: "5px 10px" }} /> Policies</Center></Link>
                                                <Spacer />
                                                <Link><Center><InfoIcon sx={{ color: "#f38f2f", margin: "10px" }} /> About MeanBuy</Center></Link>
                                                <Spacer />
                                                <Link><Center><WhatshotIcon sx={{ color: "#f38f2f", margin: "5px 10px" }} /> Trending items</Center></Link>
                                                <Spacer />
                                                <Link><Center><BookIcon sx={{ color: "#f38f2f", margin: "5px 10px" }} /> Blog</Center></Link>
                                                <Spacer />
                                            </VStack>
                                            <Button margin={"20px 15px"} ><Center><LogoutIcon sx={{ color: "#f38f2f", marginRight: "10px" }} /> Logout</Center></Button>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>

                            </Box>
                        </Center>
                    </Flex>
                </Flex>

                <Box w={"full"} h={"30px"}>
                    <Flex ml={"125px"}>

                        <Category />

                        {
                            Links.map((link) => (
                                <NavLink
                                    className={styles.default}
                                    key={link.path}
                                    to={link.path}
                                >
                                    <Text fontSize="xs" as={"b"} color={"#4A5568"} m={"0px 20px"}>{link.title}</Text>
                                </NavLink>
                            ))
                        }
                    </Flex>
                </Box>

            </VStack>

        </div>
    )
}