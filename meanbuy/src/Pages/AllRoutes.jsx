import {Route, Routes} from "react-router-dom"
import { Home } from "./Home"
import { SingleProductPage } from "./SingleProductPage"
import { TrendingPage } from "./TrendingPage"
export const AllRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/trending" element={<TrendingPage/>}></Route>
                <Route path="/product" element={<SingleProductPage/>}></Route>
            </Routes>
        </div>
    )
}