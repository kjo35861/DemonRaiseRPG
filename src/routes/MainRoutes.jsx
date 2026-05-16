import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Lobby from "../pages/Lobby/Lobby";

function MainRoutes() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lobby" element={<Lobby />} />

                <Route path="*" element={"404 에러"}/>
            </Routes>
        </>
    )
}

export default MainRoutes;