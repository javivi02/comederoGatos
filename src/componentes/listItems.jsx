import React, {useEffect, useState} from "react";
import {bbdd} from "../bbdd/bbdd.js";
import Item from "./item.jsx";
import {getHorarios} from "../services/getHorarios.js";

const ListItems = ({ props }) => {

    const [horarios, setHorarios] = useState([]);
    const [eliminar, setEliminar] = useState(0);

    useEffect(() => {

        getHorarios().then(setHorarios)

    }, [eliminar]);

    return(

        <section>

            {horarios?.map((item) =>
                (
                    <Item
                        key={item.id}
                        item={item}
                        eliminar={eliminar}
                        setEliminar={setEliminar}
                    />
                ))
            }

        </section>

    );
}

export default ListItems;