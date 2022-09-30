import { Box, Text, GridItem, Grid, Center, Input, Spacer, Button, Image, HStack } from "@chakra-ui/react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShieldIcon from '@mui/icons-material/Shield';
export const Footer1 = ({boolean=false}) => {
    return(
        <Grid p={"15px 20px"} w={"100%"} templateColumns='repeat(5, 1fr)' justifyContent={"space-evenly"} bg={"#f2f2f2"}>
                <GridItem >
                    <Text fontSize={"15px"} color={"#f38f2f"} textAlign={"left"} m={"10px 0px"} >OUR POLICIES</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Covid-19 Precautions</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Our Promise</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Terms & Conditions</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Customs tariffs and fees</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Privacy Policy</Text>
                </GridItem>
                <GridItem>
                    <Text fontSize={"15px"} color={"#f38f2f"} textAlign={"left"} m={"10px 0px"} >CORPORATE</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Sell With Us</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Career Opportunities</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Our Blog</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Sitemap</Text>
                </GridItem>
                <GridItem>
                    <Text fontSize={"15px"} color={"#f38f2f"} textAlign={"left"} m={"10px 0px"} >HELP</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >How MeanBuy Works</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >My Orders</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Exchanges, Returns and Refunds</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Contact Us</Text>
                    <Text fontSize={"13px"} textAlign={"left"} >FAQ</Text>
                </GridItem>
                <GridItem>
                    <Text fontSize={"15px"} color={"#f38f2f"} textAlign={"left"} m={"10px 0px"} >SELL WITH US</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >General Information</Text>
                    <Text fontSize={"13px"} color={"#4A5568"} textAlign={"left"} >Signup</Text>
                </GridItem>
                <GridItem>
                    <Box p='10px 0px 20px 0px' display={"flex"} alignItems={"flex-start"}>
                        <Center overflow={"hidden"} w={"280px"} h={"35px"} bg={"white"} borderRadius={"4px"}>
                            <Input w={"100%"} placeholder='Your Email Address' variant='filled' focusBorderColor='none' h={"35px"} borderRadius={"0px"} _hover={{ bg: "white" }} bg={"white"} />
                            <Spacer />
                            <Button w={"140px"} bg={"#f38f2f"} _hover={{ bg: "#f38f2f" }} >
                                <Text color={"white"}>SubSribe</Text>
                            </Button>
                        </Center>
                    </Box>
                    <Box display={"flex"} alignItems={"flex-start"}>
                        <InstagramIcon sx={{ color: "#ED64A6", fontSize: "38px", cursor: "pointer", marginRight: "10px" }} />
                        <FacebookIcon sx={{ color: "#4299E1", fontSize: "40px", cursor: "pointer", marginRight: "10px" }} />
                        <YouTubeIcon sx={{ color: "#E53E3E", fontSize: "40px", cursor: "pointer", marginRight: "10px" }} />
                        <LinkedInIcon sx={{ color: "#4299E1", fontSize: "40px", cursor: "pointer", marginRight: "10px" }} />
                    </Box>
                    <HStack>
                        <Box cursor={"pointer"} m={"20px 10px 20px 0px"} borderRadius={"20px"} left={"9px"} w={"60px"} h={"25px"} position={"relative"} border={"2px solid #48BB78"}>
                            <ShieldIcon sx={{ position: "absolute", left: "-10px", top: "-6px", color: "#48BB78", fontSize: "32px", cursor: "pointer" }} />
                            <Text fontSize={"10px"} position={"relative"} top={"-4px"} left={"7px"} as={"b"} color={"#48BB78"}>Secure</Text>
                        </Box>
                        <HStack>
                            <Image cursor={"pointer"} w={"50px"} borderRadius={"10px"} src="/Images/masterCard.png" />
                            <Image cursor={"pointer"} w={"50px"} borderRadius={"10px"} src="/Images/rupay.png" />
                            <Image cursor={"pointer"} w={"50px"} borderRadius={"10px"} src="/Images/paypal.png" />
                        </HStack>
                    </HStack>
                    {boolean && <Box display={"flex"} alignItems={"flex-start"}>
                        <Image src="/Images/Safe.jpg" />
                    </Box>}
                </GridItem>
            </Grid>
    )
}