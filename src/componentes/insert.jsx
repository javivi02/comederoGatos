import React from "react";
import {useNavigate} from "react-router-dom";
import Racion from "./racion.jsx";
import Test from './test.jsx'

const Insert = ({ props }) => {

    const navigate = useNavigate();

    const handlerInsert = () => {
        navigate(`/item`)

    }

    return(

        <>
            <div className={`flex flex-row-reverse items-center mx-4`}>
                <img onClick={()=> handlerInsert()}
                     className={`cursor-pointer ml-4`}
                    src="insert.svg" width='75' height='75' alt=""/>
                <Racion />
                <Test />
            </div>
        </>

    );
}

export default Insert;