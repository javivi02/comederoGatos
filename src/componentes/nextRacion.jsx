import React from "react";

const NextRacion = ({ nextRacion }) => {

    return(

        <>
            <div className={`flex flex-row items-center mt-4`}>
                <div className={`font-bold ml-5`}>
                    Próxima ración en:
                </div>
                <div className={`ml-7 text-4xl font-extrabold text-[#E5D54E]`}>
                    {nextRacion === undefined ? "loading..." : nextRacion}
                </div>
            </div>


        </>

    );
}

export default NextRacion;