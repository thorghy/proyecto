function MenuContacto() {
    return (
        <div className="w-full h-fit flex flex-col justify-center items-center">
            <section name="menu-contacto" className="w-120 h-200 px-4 py-4 my-10 border-rosa border-3 rounded-lg bg-white shadow-lg/30">
                <form className="w-full h-full">
                    <div className="mb-8">
                        <label className="block mb-2">Nombre</label>
                        <input class="border-3 border-rosa rounded-lg w-full h-10" type="text" name="nombre" id="nombre" />
                    </div>

                    <div className="mb-8">
                        <label className="block mb-2">Apellidos</label>
                        <input class="border-3 border-rosa rounded-lg w-full h-10" type="text" name="apellidos" id="apellidos" />
                    </div>

                    <div className="mb-8">
                        <label className="block mb-2">Email</label>
                        <input class="border-3 border-rosa rounded-lg w-full h-10" type="text" name="email" id="email" />
                    </div>

                    <div className="mb-8">
                        <label className="block mb-2">Teléfono</label>
                        <input class="border-3 border-rosa rounded-lg w-full h-10" type="text" name="telefono" id="telefono" />
                    </div>

                    <div className="mb-8">
                        <label className="block mb-2">Comentario</label>
                        <input class="border-3 border-rosa rounded-lg w-full h-20" type="text" name="comentario" id="comentario" />
                    </div>

                    <div className="mb-8 flex flex-row justify-start items-center space-x-8">
                        <label className="mb-2">Inscribirse como suscriptor</label>
                        <input class="border-3 border-rosa rounded-lg w-10 h-10" type="checkbox" name="suscribirse" id="suscribirse" />
                    </div>

                    <div className="flex flex-row justify-center">
                        <button className="rounded-lg border-3 border-rosa py-2 px-8" type="submit">ENVIAR</button>
                    </div>
                    
                </form>
            </section>
        </div>
    )
}

export default MenuContacto