import {API} from "./config.js";

const getHorarioById = async (id) => {

    try {

        const respuesta = await fetch(`${API}horario/${id}`);
        if (!respuesta.ok) throw 'No se pudo realizar la peticion';

        const {data} = await respuesta.json();

        console.log(data[0])
        return data[0];

    } catch (err) {
        throw err;
    }

}

export {getHorarioById}
