import React, { useEffect, useState } from 'react'
import NavBar from '../componentes/navBar.jsx'

import ListItems from '../componentes/listItems.jsx'
import { getHorarios } from '../services/getHorarios.js'

const Dashboard = ({ props }) => {

    const [horarios, setHorarios] = useState([])
    const [eliminar, setEliminar] = useState(0)

    useEffect(() => {

        getHorarios().then(setHorarios)

    }, [eliminar])

    return (

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-full w-full sm:rounded-xl sm:w-[39rem] sm:mt-10 sm:border-4 sm:h-[57rem]`}>

                    <NavBar
                        eliminar={eliminar}
                        horarios={horarios}/>
                    <ListItems
                        eliminar={eliminar}
                        setEliminar={setEliminar}
                        horarios={horarios}/>

                </main>

            </div>

        </>

    )
}

export default Dashboard