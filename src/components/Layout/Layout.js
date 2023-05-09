import { Outlet } from "react-router";
import { Header } from "../Header/Header";

export const Layout = () => {
    return (
        <div className="main">
            <Header/>
            <Outlet/>
        </div>
    )
}