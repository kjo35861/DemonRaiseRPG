import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Lobby from "../pages/Lobby/Lobby";
import Battle from "../pages/Battle/Battle";
import Inventory from "../pages/Inventory/Inventory";
import Shop from "../pages/Shop/Shop";
import ErrorPage404 from "../pages/ErrorPage404/ErrorPage404";
import Reward from "../pages/Reward/Reward";

function MainRoutes() {

    
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lobby" element={<Lobby />} />
                <Route path="/battle" element={<Battle />} />
                <Route path="/reward/:result" element={<Reward />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/shop" element={<Shop />} />

                <Route path="*" element={<ErrorPage404 />}/>
            </Routes>
        </>
    )
}

export default MainRoutes;