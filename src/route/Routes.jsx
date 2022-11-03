import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contactme from "../pages/Contactme";
const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contactme/>} />
        </Route>
    )
)

export default Router;