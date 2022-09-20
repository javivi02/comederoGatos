import React, {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import NavBar from "../componentes/navBar.jsx";
import {getHorarioById} from "../services/getHorarioById.js";
import {createHorario} from "../services/createHorario.js";
import {updateHorario} from "../services/updateHorario.js";

const ItemDetail = ({ props }) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [comodin, setComodin] = useState();

    const [item, setItem] = useState({
        hora: "",
        raciones:""
    });

    useEffect(() => {

        getHorarioById(id).then(item=>{

            if (!item){
                setComodin(false)
            }else {
                setComodin(true)
                setItem(item)
            }
        })

    }, []);

    const handleHora = (e) => {

        setItem(item =>{
            return{
                ...item,
                hora: e.target.value
            }})


    }

    const handleRaciones = (e) => {


        setItem(item =>{
            return{
                ...item,
                raciones: e.target.value
            }})


    }

    const handleSave = (e) => {

        if (comodin === false){
            const horario = {
                hora: item.hora,
                raciones: item.raciones
            }

            createHorario(horario).then(item => {
                console.log(item)
                navigate(`/`)
            })
        }

        else {
            const horario = {
                hora: item.hora,
                raciones: item.raciones
            }

            updateHorario(item.id, horario).then(item => {
                console.log(item)
                navigate(`/`)
            })
        }

    }

    return(

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-full w-full sm:rounded-xl sm:w-[39rem] sm:mt-10 sm:border-4 sm:h-[55rem]`}>

                    <NavBar />

                    <div className={`flex flex-col items-center justify-center mt-24 text-3xl mb-8`}>

                        <div className={`flex items-center justify-center`}>
                            <div className={`text-6xl`}>🕘&nbsp;&nbsp;</div>
                            <input className={`rounded text-2xl mx-9 w-44`} type={"time"}
                                   onChange={handleHora} value={item.hora}/>
                        </div>

                        <div className={`flex items-center justify-center mt-8`}>
                            <div className={`text-6xl`}>🍕&nbsp;&nbsp;</div>
                            <div>

                                <input type="radio" value="1" name="raciones" checked={item?.raciones == 1}
                                       className={`mx-2`}
                                       onChange={handleRaciones}/>
                                <label className={`text-lg`}>1</label>

                                <input type="radio" value="2" name="raciones" checked={item?.raciones == 2}
                                       className={`mx-3`}
                                        onChange={handleRaciones}/>
                                <label className={`text-lg`}>2</label>

                                <input type="radio" value="3" name="raciones" checked={item?.raciones == 3}
                                       className={`mx-3`}
                                        onChange={handleRaciones}/>
                                <label className={`text-lg`}>3</label>

                                <input type="radio" value="4" name="raciones" checked={item?.raciones == 4}
                                       className={`mx-3`}
                                        onChange={handleRaciones}/>
                                <label className={`text-lg`}>4</label>

                                <input type="radio" value="5" name="raciones" checked={item?.raciones == 5}
                                       className={`mx-3`}
                                    onChange={handleRaciones}/>
                                <label className={`text-lg`}>5</label>

                            </div>
                        </div>

                        <div className="inline-flex mt-24">
                            <button className="bg-[#E5D54E] text-[#0E7490] font-bold py-2 px-4 rounded mx-6">
                                <Link to={`/`}>
                                    🔙
                                </Link>
                            </button>
                            <button className="bg-[#E5D54E] text-[#0E7490] font-bold py-2 px-4 rounded mx-6"
                            onClick={handleSave}>
                                {!comodin ? "Guardar" : "Actualizar"}
                                {/*Guardar*/}
                            </button>
                        </div>

                    </div>

                </main>

            </div>

        </>

    );
}

export default ItemDetail;