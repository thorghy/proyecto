function OpcionesBusqueda() {
    return (
        <div name="opciones-de-busqueda" className="flex flex-col px-7 mt-4">
            <div className="flex flex-row">
                <div className="flex flex-row space-x-2">
                    <div
                        className="bg-white py-1 w-70 h-10 rounded-lg border-rosa border-3 border-solid flex items-center flex-row justify-between">
                        <input type="text" placeholder="Buscar eventos..."
                            className="focus:outline-none ml-4 w-full text-base text-black" />
                        <button className="w-fit h-full ml-2 mr-2 ">
                            <img className="h-full fill-rosa" src="src\assets\icons\lupa.svg" />
                        </button>
                    </div>
                    <button className="bg-white hover:border-gris py-1 w-fit h-10 rounded-lg border-rosa border-3 border-solid flex items-center flex-row justify-between">
                        <span className="ml-4 text-base text-black">
                            Filtros
                        </span>
                        <img className="h-6 ml-4 mr-2 fill-rosa" src="src\assets\icons\filter.svg" />
                    </button>

                    <button className="bg-white hover:border-gris py-1 w-40 h-10 rounded-lg border-rosa border-3 border-solid flex items-center flex-row justify-between">
                        <span className="ml-4 text-base text-black">
                            Nuevos
                        </span>
                        <img className="w-7 ml-auto mr-2 fill-rosa" src="src\assets\icons\dropdown.svg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OpcionesBusqueda