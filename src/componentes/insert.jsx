import React from "react";

const Insert = ({ props }) => {

    const handlerInsert = () => {

        console.log(`Insertar`)

    }

    return(

        <>
            <div className={`relative flex flex-col items-end mx-2 `}>
                <img onClick={()=> handlerInsert()}
                     className={`cursor-pointer`}
                    src="src/assets/insert.svg" width='70' height='70' alt=""/>
            </div>
        </>

    );
}

export default Insert;