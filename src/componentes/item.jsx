import React from "react";
import {useNavigate} from "react-router-dom";

const Item = ({ item }) => {

    const navigate = useNavigate();

    const handlerEditar = (item) => {

        console.log(`Editar`)
        console.log(item)

        navigate(`/item/${item.id}`)

    }

    const handlerEliminar = (item) => {

        console.log(`Eliminar`)
        console.log(item)

    }

    return(

        <>

            <div className={`bg-white rounded-2xl m-4 shadow-md`}>

                <div className={`flex flex-row items-center justify-between h-24`}>

                    <div onClick={()=> handlerEditar(item)}
                        className={`text-base px-2 flex items-center justify-between`}>
                        <div className={`text-5xl`}>
                            🕘
                        </div>
                        <div className={`text-xl`}>
                            &nbsp;&nbsp;{item.hora}
                        </div>
                    </div>

                    <div onClick={()=> handlerEditar(item)}
                        className={`text-base px-2 flex items-center justify-between`}>
                        <div className={`text-5xl`}>
                            🍕
                        </div>
                        <div className={`text-xl`}>
                            &nbsp;&nbsp;{item.porciones}
                        </div>
                    </div>

                    <div className={`text-lg font-bold px-2`}>

                       {/* <button onClick={()=> handlerEditar(item)}
                                type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none
                                hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg
                                text-sm px-2 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600
                                dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            ✏️
                        </button>*/}

                        <button onClick={()=> handlerEliminar(item)}
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

    );
}

export default Item;

/*
<button onClick={()=> handlerEliminar(item)}
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none
                                hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg
                                text-sm px-2 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600
                                dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
    🗑
</button>*/
