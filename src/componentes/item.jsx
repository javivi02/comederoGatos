import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteHorarioById } from '../services/deleteHorarioById.js'
import { hourCalculate } from '../helpers/hourCalculate.js'

const Item = ({ item, eliminar, setEliminar }) => {

    const navigate = useNavigate()
    const [horaRest, setHoraRest] = useState('loading...')

    useEffect(() => {
        const intervalo = setInterval(() => {

            setHoraRest(hourCalculate(new Date(), `${item.hora}:00`))

        }, 800)

        return () => {
            clearInterval(intervalo)
        }
    }, [horaRest])

    const handlerEditar = (item) => {

        navigate(`/item/${item.id}`)

    }

    const handlerEliminar = (item) => {

        if (confirm('Desea eliminar el horario ¿?')) {
            deleteHorarioById(item.id).then(item => {
                console.log(item)
                setEliminar(eliminar + 1)
            })
        }
    }

    return (

        <>

            <div className={`bg-white rounded-2xl m-4 shadow-md`}>

                <div className={`flex flex-row items-center justify-between h-24`}>

                    <div onClick={() => handlerEditar(item)}
                         className={`text-base px-2 flex items-center justify-between cursor-pointer`}>
                        <div className={`text-5xl`}>
                            🕘
                        </div>
                        <div className={`text-xl`}>
                            &nbsp;&nbsp;{item.hora}
                        </div>
                        <div className={`relative left-3 text-xs`}>
                            {horaRest}
                        </div>
                    </div>

                    <div onClick={() => handlerEditar(item)}
                         className={`text-base px-2 flex items-center justify-between cursor-pointer`}>
                        <div className={`text-5xl`}>
                            🍕
                        </div>
                        <div className={`text-xl`}>
                            {item.raciones}
                        </div>
                    </div>

                    <div className={`text-lg font-bold px-2`}>

                        <button onClick={() => handlerEliminar(item)}
                                type="button"
                                className="text-gray-900 bg-white focus:outline-none
                                hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg
                                text-3xl px-2 py-2 mr-2">
                            🗑
                        </button>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Item