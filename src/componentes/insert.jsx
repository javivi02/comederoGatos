import React from "react";
import {useNavigate} from "react-router-dom";

const Insert = ({ props }) => {

    const navigate = useNavigate();

    const handlerInsert = () => {
        //console.log(`Insertar`)
        navigate(`/item`)

    }

    return(

        <>
            <div className={`relative flex flex-col items-end mx-2 `}>
                <img onClick={()=> handlerInsert()}
                     className={`cursor-pointer`}
                    src="insert.svg" width='75' height='75' alt=""/>
            </div>
        </>

    );
}

export default Insert;