import { Footer1 } from "./Footer1";
import { Footer3 } from "./Footer3";
import { Footer2 } from "./Footer2";
import { VStack } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <VStack>
            
            <Footer1 boolean={true}/>

            <Footer2/>

            <Footer3/>
            
        </VStack>
    )
}