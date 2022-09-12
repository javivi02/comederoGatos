import React from "react";
import {useParams} from "react-router-dom";
import NavBar from "../componentes/navBar.jsx";
import {findItemByID} from "../helpers/findItemByID.js";

const ItemDetail = ({ props }) => {

    const {id} = useParams();
    const item = findItemByID(parseInt(id))

    return(

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-screen w-full bg-cyan-700 sm:rounded-lg sm:w-[39rem] sm:mt-10`}>

                    <NavBar />

                    <div className={`flex flex-col items-center justify-center mt-3 text-3xl`}>
                    <div>{item?.id}</div>
                    <div>{item?.hora}</div>
                    <div>{item?.porciones}</div>
                    </div>

                </main>

            </div>

        </>

    );
}

export default ItemDetail;