import React from "react";
import NavBar from "../componentes/navBar.jsx";
import Insert from "../componentes/insert.jsx";
import ListItems from "../componentes/listItems.jsx";

const Dashboard = ({ props }) => {

    return(

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-full w-full sm:rounded-xl sm:w-[39rem] sm:mt-10 sm:border-4 sm:h-[980px]
                sm:h-[640px]`}>

                    <NavBar />
                    <Insert />
                    <ListItems />

                </main>

            </div>

        </>

    );
}

export default Dashboard;