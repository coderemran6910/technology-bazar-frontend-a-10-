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
import ProductDetails from "../components/ProductDetails";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoute from "../components/PrivateRoute";
import ProductUpdate from "../Pages/ProductUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout1Page />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader : async()=> await fetch('https://technology-electronics-three.vercel.app/brands')
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
                loader : async()=> await fetch('https://technology-electronics-three.vercel.app/products')
            },
            {
                path: "/brandsPage",
                element: <BrandsPage />,
                loader : async()=> await fetch('https://technology-electronics-three.vercel.app/brands')
            },
            {
                path: "/products/:name",
                element: <ShowBrandsProducts></ShowBrandsProducts>,
               loader: ({params})=> fetch(`https://technology-electronics-three.vercel.app/products/${params.name}`)
            },
            {
                path: "/products/:brand/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://technology-electronics-three.vercel.app/products/${params.brand}/${params.id}`)
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/carts",
                element: <PrivateRoute><MyCartPage /></PrivateRoute>,
                loader: ()=>fetch('https://technology-electronics-three.vercel.app/cards')
            },
            {
                path: "/update/:brand/:id",
                element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
                loader: ({params})=> fetch(`https://technology-electronics-three.vercel.app/products/${params.brand}/${params.id}`)
            }
        ]

    }
])

export default router;