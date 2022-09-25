import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "../vista/dashboard.jsx";
import ItemDetail from "../vista/itemDetail.jsx";

const AppRouters = ({ props }) => {

    return(

        <>

            <BrowserRouter>

                <Routes>
                    <Route path="/comederoGatos" element={<Dashboard />} />
                    <Route path="item/:id" element={<ItemDetail />} />
                    <Route path="item" element={<ItemDetail />} />

                    <Route path="/" element={<Navigate to="/comederoGatos" />} />

                </Routes>

            </BrowserRouter>


        </>

    );
}

export default AppRouters;