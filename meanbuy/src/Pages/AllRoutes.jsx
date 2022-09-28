import {Route, Routes} from "react-router-dom"
import { Home } from "./Home"
export const AllRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </div>
    )
}