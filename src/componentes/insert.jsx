import React from "react";

const Insert = ({ props }) => {

    const handlerInsert = () => {

        console.log(`Insertar`)

    }

    return(

        <>
            <div className={`relative flex flex-col items-end mx-2 `}>
                <img onClick={()=> handlerInsert()}
                     className={`cursor-pointer opacity-95`}
                    src="src/assets/insert.svg" width='85' height='85' alt=""/>
            </div>
        </>

    );
}

export default Insert;