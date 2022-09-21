import React from "react";
import {racionService} from "../services/racionService.js";

const Racion = ({ props }) => {

    const handlerRacion = () => {

        racionService().then((res) => {
            alert(res)
        })
    }

    return(

        <>
                <div onClick={()=> handlerRacion()}
                     className={`cursor-pointer text-6xl`}>
                    🍕
                </div>
        </>

    );
}

export default Racion;