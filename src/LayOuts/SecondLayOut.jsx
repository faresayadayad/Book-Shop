import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderAfterSignUp from "../components/HeaderAfterSignUp";

export default function SecondLayOut() {
    
        return (
            <>
                <HeaderAfterSignUp />
                <Outlet />
                <Footer />
            </>
        )
    }
