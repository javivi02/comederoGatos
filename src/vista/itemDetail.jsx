import React, {useState} from "react";
import {useParams, Link} from "react-router-dom";
import NavBar from "../componentes/navBar.jsx";
import {findItemByID} from "../helpers/findItemByID.js";

const ItemDetail = ({ props }) => {

    const {id} = useParams();
    const item = findItemByID(parseInt(id))

    const [hora, setHora] = useState(item?.hora === undefined ? "" : item.hora);
    const [porciones, setPorciones] = useState(item?.porciones === undefined ? "" : item.porciones);

    const handleHora = (e) => {
        setHora(e.target.value);
    }

    const handlePorsiones = (e) => {
        console.log(e.target.value);
        setPorciones(e.target.value)
    }

    const handleSave = (e) => {

        console.log("Guardando cambios");
    }

    return(

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-full w-full sm:rounded-lg sm:w-[39rem] sm:mt-10`}>

                    <NavBar />

                    <div className={`flex flex-col items-center justify-center mt-24 text-3xl`}>

                        <div className={`flex items-center justify-center`}>
                            <div className={`text-6xl`}>🕘&nbsp;&nbsp;</div>
                            <input className={`rounded text-2xl mx-9 w-44`} type={"time"}
                                   onChange={handleHora} value={hora}/>
                        </div>

                        <div className={`flex items-center justify-center mt-8`}>
                            <div className={`text-6xl`}>🍕&nbsp;&nbsp;</div>
                            <div>

                                <input type="radio" value="1" name="porciones" checked={porciones == 1}
                                       className={`mx-2`}
                                       onChange={handlePorsiones}/>
                                <label className={`text-lg`}>1</label>

                                <input type="radio" value="2" name="porciones" checked={porciones == 2}
                                       className={`mx-3`}
                                        onChange={handlePorsiones}/>
                                <label className={`text-lg`}>2</label>

                                <input type="radio" value="3" name="porciones" checked={porciones == 3}
                                       className={`mx-3`}
                                        onChange={handlePorsiones}/>
                                <label className={`text-lg`}>3</label>

                                <input type="radio" value="4" name="porciones" checked={porciones == 4}
                                       className={`mx-3`}
                                        onChange={handlePorsiones}/>
                                <label className={`text-lg`}>4</label>

                                <input type="radio" value="5" name="porciones" checked={porciones == 5}
                                       className={`mx-3`}
                                    onChange={handlePorsiones}/>
                                <label className={`text-lg`}>5</label>

                            </div>
                        </div>

                        <div className="inline-flex mt-24">
                            <button className="bg-[#E5D54E] text-[#0E7490] font-bold py-2 px-4 rounded mx-6">
                                <Link to={`/`}>
                                    🔙
                                </Link>
                            </button>
                            <button className="bg-[#E5D54E] text-[#0E7490] font-bold py-2 px-4 rounded mx-6"
                            onClick={handleSave}>
                                Guardar
                            </button>
                        </div>

                    </div>

                </main>

            </div>

        </>

    );
}

export default ItemDetail;