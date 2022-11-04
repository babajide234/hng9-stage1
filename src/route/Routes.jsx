import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contactme from "../pages/Contactme";
import MainLayout from "../Layout/MainLayout";
const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contactme/>} />
        </Route>
    )
)

export default Router;