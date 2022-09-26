import React from "react";
import Item from "./item.jsx";

const ListItems = ({eliminar, setEliminar, horarios}) => {

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