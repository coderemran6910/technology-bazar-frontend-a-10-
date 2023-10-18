import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";

const Layout1Page = () => {
    return (
        <div>
            <HomePage></HomePage>
            <Outlet> </Outlet>

        </div>
    );
};

export default Layout1Page;