import { createBrowserRouter } from "react-router-dom";
import Layout1Page from "../Pages/Layout1Page";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import AddProductPage from "../Pages/AddProductPage";
import MyCartPage from "../Pages/MyCartPage";
import AddBrand from "../Pages/AddBrand";
import ShowProducts from "../Pages/ShowProducts";
import BrandsPage from "../Pages/BrandsPage";
import ShowBrandsProducts from "../Pages/ShowBrandsProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout1Page />,
        children: [
            {
                path: "/home",
                element: <HomePage />,
                loader : async()=> await fetch('http://localhost:5000/brands')
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
            {
                path: "/add-brands",
                element: <AddBrand />,
            },
            {
                path: '/show-products',
                element: <ShowProducts />,
                loader : async()=> await fetch('http://localhost:5000/products')
            },
            {
                path: "/brandsPage",
                element: <BrandsPage />,
                loader : async()=> await fetch('http://localhost:5000/brands')
            },
            {
                path: "/products/:name",
                element: <ShowBrandsProducts></ShowBrandsProducts>,
               
            }
        ]

    }
])

export default router;