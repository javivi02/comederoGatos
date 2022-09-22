import React, {useEffect, useState} from "react";
import Insert from "./insert.jsx";
import {getHorarios} from "../services/getHorarios.js";
import {hourCalculate} from "../helpers/hourCalculate.js";
import NextRacion from "./nextRacion.jsx";

const NavBar = ({ props }) => {

    const [horarios, setHorarios] = useState([]);
    const [nextRacion, setNextRacion] = useState("loading...");

    useEffect(() => {

        getHorarios().then(setHorarios)

    }, []);

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

    }, [nextRacion]);

    return(

        <>
            <div className={`sticky w-full top-0 bg-[#0E7490] z-40`}>
                <nav className={`bg-yellow-300 lineaOblicua backdrop-blur-sm bg-yellow-300/90 -mb-8 sm:rounded-t-lg`}>

                    <div className={`flex flex-col items-center pt-2 text-5xl font-extrabold h-28`}>
                        😺&nbsp;&nbsp;COCO
                    </div>
                </nav>

                <Insert />
                <NextRacion nextRacion={nextRacion} />


            </div>
        </>

    );
}

export default NavBar;