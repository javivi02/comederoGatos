import {API} from "./config.js";

const updateHorario = async( id, usuario ) => {

    try {

        const respuesta = await fetch(`${API}horario/${id}`, {
            method: 'PUT',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await respuesta.json();

    }catch (err){ throw err; }

}

export {updateHorario}