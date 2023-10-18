import { createBrowserRouter } from "react-router-dom";
import Layout1Page from "../Pages/Layout1Page";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import AddProductPage from "../Pages/AddProductPage";
import MyCartPage from "../Pages/MyCartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout1Page />,
        children: [
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/add-product",
                element: <AddProductPage />,
            },
            {
                path: "/my-cart",
                element: <MyCartPage />,
            },
        ]

    }
])

export default router;