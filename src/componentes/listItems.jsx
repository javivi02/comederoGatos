import React, {useEffect, useState} from "react";
import Item from "./item.jsx";
import {getHorarios} from "../services/getHorarios.js";

const ListItems = ({eliminar, setEliminar}) => {

    const [horarios, setHorarios] = useState([]);

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