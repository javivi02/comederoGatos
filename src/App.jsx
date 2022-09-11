import React from "react";
import NavBar from "./componentes/navBar.jsx";
import Insert from "./componentes/insert.jsx";
import ListItems from "./componentes/listItems.jsx";

const App = ({props}) => {

    return (

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-full w-full bg-cyan-700 sm:rounded-lg sm:w-[39rem] sm:mt-10`}>

                    <NavBar />
                    <Insert />
                    <ListItems />

                </main>

            </div>
        </>

    );
}

export default App;