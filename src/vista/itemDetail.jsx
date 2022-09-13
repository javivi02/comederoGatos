import React, {useState} from "react";
import {useParams} from "react-router-dom";
import NavBar from "../componentes/navBar.jsx";
import {findItemByID} from "../helpers/findItemByID.js";

const ItemDetail = ({ props }) => {

    const {id} = useParams();
    const item = findItemByID(parseInt(id))

    const [hora, setHora] = useState(item.hora);
    const [porciones, setPorciones] = useState(item.porciones);

    const handleHora = (e) => {
        setHora(e.target.value);
    }

    const handlePorsiones = (e) => {
        console.log(e.target.value);
        setPorciones(e.target.value)
    }

    return(

        <>
            <div className={`flex flex-col items-center justify-center`}>

                <main className={`h-screen w-full bg-cyan-700 sm:rounded-lg sm:w-[39rem] sm:mt-10`}>

                    <NavBar />

                    <div className={`flex flex-col items-center justify-center mt-20 text-3xl`}>

                        <div className={`flex items-center justify-center`}>
                            <div className={`text-6xl`}>🕘&nbsp;&nbsp;</div>
                            <input className={`rounded text-2xl mx-9 w-44`} type={"time"}
                                   onChange={handleHora} value={hora}/>
                        </div>

                        {/*<div className={`flex items-center justify-center mt-8`}>
                            <div className={`text-6xl`}>🍕&nbsp;&nbsp;</div>
                            <input className={`rounded text-4xl w-24 mx-6`}
                                   type={"range"} min="1" max="6" step="1"
                                   value={porciones}
                                   onChange={handlePorsiones}/>

                            <div className={`text-4xl font-bold text-amber-300`}>{porciones}</div>
                        </div>*/}


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
                    </div>

                </main>

            </div>

        </>

    );
}

export default ItemDetail;