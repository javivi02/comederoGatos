import {API} from "./config.js";

const test = async () => {

   try {

      const respuesta = await fetch(`${API}test`);
      if (!respuesta.ok) throw 'No se pudo realizar la peticion';

      const {message} = await respuesta.json();

      return message;

   } catch (err) {
      throw err;
   }

}

export {test}