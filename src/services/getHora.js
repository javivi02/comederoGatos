import {API} from "./config.js";

const getHora = async () => {

    try {

        const respuesta = await fetch(`${API}hora`);
        if (!respuesta.ok) throw 'No se pudo realizar la peticion';

        const {data} = await respuesta.json();

        return data;

    } catch (err) {
        throw err;
    }

}

export {getHora}