import {API} from "./config.js";

const getHorarios = async () => {

    try {

        const respuesta = await fetch(`${API}horario`);
        if (!respuesta.ok) throw 'No se pudo realizar la peticion';

        const {data} = await respuesta.json();

        return data;

    } catch (err) {
        throw err;
    }

}

export {getHorarios}