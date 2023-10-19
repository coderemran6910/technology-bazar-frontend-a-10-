import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout1Page = () => {
    return (
        <div>
           <Header></Header>
            <Outlet> </Outlet>

        </div>
    );
};

export default Layout1Page;