function TarjetaEvento({ titulo, descripcion, fechaLarga, fechaCorta, lugar, categoria, imagen, mostrarEventosProximos }) {

    function cambiarFormatoFecha(fecha) {
        const [dia, mes, año] = fecha.split("/").map(Number);
        return new Date(año, mes - 1, dia);
    }

    const fechaEvento = cambiarFormatoFecha(fechaCorta);
    const fechaActual = cambiarFormatoFecha("1/5/2026");

    if (fechaActual >= fechaEvento && mostrarEventosProximos) {
        console.log("dada")
        return;
    } else if (fechaActual <= fechaEvento && !mostrarEventosProximos) {
        return;
    }

    const imagenPath = "src/assets/images/" + imagen

    const categoriasColor = new Map([
        ["musica", "rosa"],
        ["cine", "azul"],
        ["teatro", "azul"],
        ["exposiciones", "naranja"]
    ]);

    let color = "gris"; // color por defecto
    if (categoriasColor.has(categoria.toLowerCase())) {
        color = categoriasColor.get(categoria.toLowerCase());
    }

    if (imagen == null) {
        imagen = "sin_imagen.png";
    }

    return (
        <article className={"border-" + color + " bg-white shadow-lg overflow-hidden flex flex-row lg:max-h-40 max-lg:h-45 min-h-30 border-3 border-solid rounded-xl border-r-6 border-b-6"}>
            <div className="min-w-50 w-1/3 max-lg:w-1/2 flex flex-col justify-center items-left">
                <img name="imagen" className="object-cover h-full" src={"src/assets/images/" + imagen} alt="imagen del evento" />
            </div>
            <div className="flex flex-col justify-start px-5 py-2 w-full">
                <div className="flex flex-col mb-2">
                    <h4 name="titulo" className="font-bold text-xl max-md:text-lg">
                        {titulo}
                        <span name="categoria" className={"text-" + color + " text-lg max-md:text-base font-normal ml-4 "}>{categoria.toUpperCase()}</span>
                    </h4>
                    <h5 name="fecha-y-lugar" className="text-lg max-md:text-base">{fechaLarga} &#x2022; {lugar}</h5>
                </div>
                <div className="flex flex-row justify-between w-full h-full">
                    <p name="descripcion" className="text-base overflow-hidden max-h-22">{descripcion}</p>
                    <div className="flex flex-col-reverse items-end w-40">
                        <button className={"bg-" + color + " w-30 h-10 rounded-lg m-2 text-white"}>Ver más</button>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default TarjetaEvento