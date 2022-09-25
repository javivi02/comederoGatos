import React, {useState} from "react";
import NavBar from "../componentes/navBar.jsx";

import ListItems from "../componentes/listItems.jsx";

const Dashboard = ({ props }) => {

    const [eliminar, setEliminar] = useState(0);

    return(

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-full w-full sm:rounded-xl sm:w-[39rem] sm:mt-10 sm:border-4 sm:h-[57rem]`}>

                    <NavBar
                    eliminar={eliminar}/>
                    <ListItems
                    eliminar={eliminar}
                    setEliminar={setEliminar}/>

                </main>

            </div>

        </>

    );
}

export default Dashboard;