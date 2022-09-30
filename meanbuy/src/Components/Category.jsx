
import styles from "./Styles.module.css"

import "./Category.css"
import { Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { TriangleDownIcon } from "@chakra-ui/icons"
import { AppContext } from "../AppContext/AppContext"

export const Category = () => {
    const {boolean, setBoolean} = useContext(AppContext)

    return (
        <div className="products">
            <button onClick={() => setBoolean(!boolean)}><Text fontSize="xs" as={"b"} color={"#4A5568"} mr={"50px"} ml={"10px"}>
                Category <span><TriangleDownIcon boxSize={2}/></span>
                </Text>
            
            </button>
            <div className={boolean? styles.subMenu1 : styles.subMenu2  } >
                <ul>
                    <div className="categories" style={{borderLeft:"2px solid #CBD5E0"}} >

                        <h3>MEN</h3>
                        <p>Watches</p>

                        <h3>WOMEN</h3>
                        <p>Makeup Accessories</p>
                        <p>Clothing</p>
                        <p>Handbags & Clutches</p>
                        <p>Watches</p>
                        <p>Ballet Flats</p>
                        <p>Sandals</p>
                        <p>Stiletto Heels &</p>
                        <p>Slip On</p>

                    </div>
                    <div className="categories">

                        <h3>ELECTRONICS</h3>
                        <p>Gaming Accessories</p>
                        <p>Keyboards & Mouse</p>
                        <p>Small Appliances</p>

                    </div>
                    <div className="categories">

                        <h3>ESSENTIALS</h3>
                        <p>Home Essentials</p>
                        <p>Men's Essentials</p>
                        <p>Women Essentials</p>

                    </div>
                    <div className="categories">

                        <h3>FLASH SALE</h3>
                        <p>Flash Sale</p>

                    </div>
                    <div className="categories">

                        <h3>HOME & LIVING</h3>
                        <p>Bath & Storage</p>
                        <p>Fitness Merchandise</p>
                        <p>Gardening</p>
                        <p>Home Decor</p>
                        <p>Home Improvement</p>
                        <p>Kitchen Wares</p>
                        <p>Nordic Ceiling Lights</p>
                        <p>Pet Products</p>

                    </div>
                    <div className="categories">

                        <h3>KIDS & MOM</h3>
                        <p>Action Figures</p>
                        <p>Discovery Adventures</p>
                        <p>Disney</p>
                        <p>Hello Kitty</p>
                        <p>Kid's Shoes</p>
                        <p>Marvel</p>
                        <p>Minions</p>
                        <p>School Backpacks</p>
                        <p>Toys</p>

                    </div>
                    <div className="categories">

                        <h3>MEANBUY DEALS</h3>
                        <p>Gifts</p>
                        <p>Electronics</p>
                        <p>Men's Watches</p>
                        <p>Smart Watches</p>
                        <p>Top Selling Smart Watches</p>

                    </div>
                    <div className="categories" style={{borderRight: "2px solid #CBD5E0"}}>

                        <h3>MOBILES & TABS</h3>
                        <p>Bluetooth Earphone</p>
                        <p>Mobiles Accessories</p>
                        <p>Sporting Bluetooth</p>
                        <p>Wired Headphones</p>
                        <p>Wireless Chargers</p>
                        <p>Wireless Speakers</p>

                    </div>
                </ul>
            </div>
        </div>

    )
}