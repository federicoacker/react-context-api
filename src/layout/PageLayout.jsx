import { Outlet } from "react-router";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Ad from "../components/Ad.jsx";

function PageLayout() {
    return (
        <>
            <div className="d-flex flex-column min-vh-100 bg-dark">
                <Header />
                <div className="d-flex flex-grow-1 main-wrapper">
                    <div className="d-flex align-items-center ad-wrapper px-2 border rounded border-white">
                        <Ad starterIndex={1}/>
                    </div>
                    <main className="flex-grow-1 px-3 py-4 overflow-auto">
                        <Outlet/>
                    </main>
                    <div className="d-flex align-items-center ad-wrapper px-2 border rounded border-white">
                        <Ad starterIndex={0}/>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageLayout