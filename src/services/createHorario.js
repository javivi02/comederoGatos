import {API} from "./config.js";

const createHorario = async (usuario)=>{

    try {

        const response = await fetch(`${API}horario`, {
            method : 'POST',
            body : JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json();

    }catch (err){ throw err; }

}

export {createHorario}