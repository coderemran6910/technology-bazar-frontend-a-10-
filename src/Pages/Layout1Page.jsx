import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";

const Layout1Page = () => {
    return (
        <div>
           <Header></Header>
            <Outlet> </Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Layout1Page;