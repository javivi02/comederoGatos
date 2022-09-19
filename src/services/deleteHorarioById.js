import {API} from "./config.js";

const deleteHorarioById = async (id) => {

    try{

        const respuesta = await fetch(`${API}horario/${id}`, {
            method: 'DELETE'
        });

        return ( respuesta.ok ) ? 'Borrado' : 'No se pudo eliminar';

    }catch (err){ throw err; }

}

export {deleteHorarioById}