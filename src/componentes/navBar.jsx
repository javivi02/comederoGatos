import React from "react";
import Insert from "./insert.jsx";

const NavBar = ({ props }) => {

    return(

        <>
            <nav className={`bg-yellow-300 lineaOblicua -mb-8 sticky top-0 w-full backdrop-blur-sm bg-yellow-300/90 
             z-40 sm:rounded-t-lg`}>

                <div className={`flex flex-col items-center pt-2 text-5xl font-extrabold h-28`}>
                    😺&nbsp;&nbsp;COCO
                </div>

            </nav>
        </>

    );
}

export default NavBar;