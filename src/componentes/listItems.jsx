import React, {useEffect, useState} from "react";
import {bbdd} from "../bbdd/bbdd.js";
import Item from "./item.jsx";
import {getHorarios} from "../services/getHorarios.js";

const ListItems = ({ props }) => {

    const [horarios, setHorarios] = useState([]);

    useEffect(() => {

        getHorarios().then(setHorarios)

    }, []);

    return(

        <section>

            {horarios?.map((item) =>
                (
                    <Item
                        key={item.id}
                        item={item} />
                ))
            }

        </section>

    );
}

export default ListItems;