import { Box, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
export const Products = ({ image }) => {
    return (
        <VStack p={"30px 0px"} borderTop={"1px solid black"} >

            <Box w={"230px"} mb={"10px"}>
                <img src={image} width={"100%"} alt="demo" />

                <Box textAlign={"left"} mt={"5px"}>
                    <Text>title</Text>
                </Box>
                <Box borderBottom={"1px solid #CBD5E0"} textAlign={"right"}>
                    <Text>rating</Text>
                </Box>
                <HStack>
                    <Text textAlign={"left"}>price</Text>
                    <Spacer />
                    <Text textAlign={"right"}>discount</Text>
                </HStack>

            </Box>
        </VStack>
    )
}