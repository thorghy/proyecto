import React, { useState } from "react";

function BotonFiltrar() {
    const [activo, setActivo] = useState(false);

    const botonFiltrar = document.getElementById("filtrarEventosBoton");
    const menuFiltrar = document.getElementById("menuFiltrar");

    const clickBotonFiltrar = () => {
        setActivo(!activo);
        console.log(activo);

        //const { filtrarBotonPosicionX, filtrarBotonPosicionY, anchura, altura } = botonFiltrar.getBoundingClientRect();
    }

    return (
        <button onClick={clickBotonFiltrar} id="filtrarEventosBoton" className="bg-white hover:border-gris py-1 w-fit h-10 rounded-lg border-rosa border-3 border-solid flex items-center flex-row justify-between">
            <span className="ml-4 text-base text-black">
                Filtros
            </span>
            <img className="h-6 ml-20 mr-2 fill-rosa" src="src\assets\icons\filter.svg" />
        </button>
    )
}

export default BotonFiltrar

