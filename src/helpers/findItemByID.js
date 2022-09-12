import {bbdd} from "../bbdd/bbdd.js";

export const findItemByID = (id) => {
    return bbdd.find((item) => item.id === id);
}