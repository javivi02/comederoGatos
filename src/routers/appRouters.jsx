import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../vista/dashboard.jsx";
import ItemDetail from "../vista/itemDetail.jsx";
import NavBar from "../componentes/navBar.jsx";

const AppRouters = ({ props }) => {

    return(

        <>

            <BrowserRouter>

                {/*<NavBar />*/}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="item/:id" element={<ItemDetail />} />

                </Routes>

            </BrowserRouter>


        </>

    );
}

export default AppRouters;