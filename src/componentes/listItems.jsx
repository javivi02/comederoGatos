import React, {useEffect, useState} from "react";
import Item from "./item.jsx";
import {getHorarios} from "../services/getHorarios.js";
import {hourCalculate} from "../helpers/hourCalculate.js";
import NextRacion from "./nextRacion.jsx";
import {getHora} from "../services/getHora.js";

const ListItems = () => {

    const [horarios, setHorarios] = useState([]);
    const [eliminar, setEliminar] = useState(0);
    const [nextRacion, setNextRacion] = useState("loading...");

    useEffect(() => {

        getHorarios().then(setHorarios)

    }, [eliminar]);

    useEffect(() => {
        const intervalo = setInterval(()=>{

            // Calculo las horas restantes en base a la hora actual, las ordeno y me quedo con la primera
            const horasNext = horarios?.map(item =>item.hora)
                                       .map(item=>hourCalculate(new Date(), `${item}:00`))
                                       .sort()[0]

            setNextRacion(horasNext)

        }, 400)
        return () => {
            clearInterval(intervalo)
        };
    }, [nextRacion, eliminar]);

    return(

        <section>

            <NextRacion nextRacion={nextRacion} />

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