import { createBrowserRouter } from "react-router"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"
import Services from "../pages/Service/Services"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import ErrorPage from "../pages/Error/ErrorPage"
import ServiceDetails from "../pages/ServiceDetails"
export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/services',
                element: <Services/>,
            },
            {
                path:'/about',
                element: <About/>,
            },
            {
                path:'/contact',
                element: <Contact/>,
            },
            {
                path:'/services/:id',
                element: <ServiceDetails/>,
            },
        ]
    }
])