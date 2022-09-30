import { Box, Button, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react"
import { FaStar } from "react-icons/fa";
import "../App.css"


export const Feedback = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (

        <Box borderTop={"2px solid #f38f2f"} borderBottom={"2px solid #f38f2f"} mt={"40px"} w={"100%"} p={"20px 40px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
            <Text fontSize={"20px"} pb={"20px"} color={"#f38f2f"} textDecoration={"underline"} >Review & Rating</Text>
            <HStack p={"10px 0px"}>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={30}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}
            </HStack>
            <Textarea w={"400px"} maxWidth={"95%"} minWidth={"400px"} minHeight={"100px"} maxHeight={"400px"} placeholder='Start writing your review' resize={"both"} />
            <Button _hover={{ backgroundColor: '#e67812' }} _active={{ backgroundColor: '#f38f2f' }} color={"white"} w={"400px"} m={"10px 0px"} bg='#f38f2f'>Orange</Button>
        </Box>
    )
}