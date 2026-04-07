function OpcionesBusqueda() {
    return (
        <div name="opciones-de-busqueda" class="flex flex-col px-7 mt-3">
            <div class="flex flex-row">
                <div class="flex flex-row space-x-2">
                    <div
                        class="bg-white py-1 w-70 h-10 rounded-lg border-rosa border-3 border-solid flex items-center flex-row justify-between">
                        <input type="text" placeholder="Buscar eventos..."
                            class="focus:outline-none ml-4 w-full text-base text-black" />
                        <button class="w-fit h-full ml-2 mr-2 ">
                            <img class="h-full fill-rosa" src="./media/icons/lupa.svg" />
                        </button>
                    </div>
                    <button
                        class="bg-white hover:border-gris cursor-pointer py-1 w-fit h-10 rounded-lg border-rosa border-3 border-solid flex items-center flex-row justify-between" />
                    <span class="ml-4 text-base text-black">
                        Filtros
                    </span>
                    <img class="h-6 ml-4 mr-2 fill-rosa" src="./media/icons/filter.svg" />
                </div>

                <div
                    class="bg-white py-1 w-40 h-10 rounded-lg border-rosa border-3 border-solid flex items-center flex-row justify-between">
                    <p class="ml-4 text-base text-black">
                        Recientes
                    </p>
                    <img class="w-7 ml-auto mr-2 fill-rosa" src="./media/icons/dropdown.svg" />
                </div>
            </div>
        </div>
    )
}

export default OpcionesBusqueda