import React from "react";
import {bbdd} from "../bbdd/bbdd.js";
import Item from "./item.jsx";

const ListItems = ({ props }) => {

    return(

        <section>

            {bbdd.map((item) =>
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