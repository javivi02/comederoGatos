import React, {useEffect, useState} from "react";
import {bbdd} from "../bbdd/bbdd.js";
import Item from "./item.jsx";
import {getHorarios} from "../services/getHorarios.js";
import {hourCalculateNext, traduceHora} from "../helpers/hourCalculate.js";

const ListItems = () => {

    const [horarios, setHorarios] = useState([]);
    const [eliminar, setEliminar] = useState(0);
    const [nextRacion, setNextRacion] = useState("loading...");

    useEffect(() => {

        getHorarios().then(setHorarios)

    }, [eliminar]);

    useEffect(() => {
        const intervalo = setInterval(()=>{
            const horas = horarios?.map(item =>item.hora)
                .map(item => hourCalculateNext(new Date(), `${item}:00`))
            const resultado = new Date(Math.max (...horas))
            setNextRacion(traduceHora(resultado))
        }, 1000)
        return () => {
            clearInterval(intervalo)
        };
    }, [nextRacion]);



    return(

        <section>
            <div className={`flex flex-row items-center mt-4`}>
                <div className={`font-bold ml-5`}>
                    Próxima ración en:
                </div>
                <div className={`ml-7 text-4xl font-extrabold text-[#E5D54E]`}>
                    {isNaN(parseInt(nextRacion)) ? "loading..." : nextRacion}
                </div>
            </div>

            {horarios?.map((item) =>
                (
                    <Item
                        key={item.id}
                        item={item}
                        eliminar={eliminar}
                        setEliminar={setEliminar}
                    />
                ))
            }

        </section>

    );
}

export default ListItems;