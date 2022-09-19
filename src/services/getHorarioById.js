import {API} from "./config.js";

const getHorarioById = async (id) => {

    try {

        const respuesta = await fetch(`${API}horario/${id}`);
        if (!respuesta.ok) throw 'No se pudo realizar la peticion';

        const {data} = await respuesta.json();

        return data[0];

    } catch (err) {
        console.warn("Al agregar no existe id de usuario. Error controlado")
        return false
    }

}

export {getHorarioById}
