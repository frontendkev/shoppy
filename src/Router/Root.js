import { Outlet, useMatches } from "react-router-dom";
import { AppFooter } from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import ScrollToTop from "../Components/Scroller/Scroller/ScrollToTop";
import Scroller from "../Components/Scroller/Scroller/Scroller";
import Modal from "../Components/Modal/Modal";


export default function Root() {
    const matches = useMatches()
    const reverseMatches = matches.reverse()
    const lastRoute = reverseMatches[0].pathname
    return (
        <>
            <ScrollToTop />
            <Scroller />
            {lastRoute !== "/" && <NavBar />}
            <Modal />

            <main className="relative w-full min-h-screen">
                <Outlet />
            </main>
            {lastRoute !== "/" && <AppFooter />}
        </>
    );
}



