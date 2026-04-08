function TarjetaEvento({ titulo, descripcion, fechaLarga, fechaCorta, lugar, categoria, imagen, tipoFecha }) {

    function cambiarFormatoFecha(fecha) {
        const [dia, mes, año] = fecha.split("/").map(Number);
        return new Date(año, mes - 1, dia);
    }

    const fechaEvento = cambiarFormatoFecha(fechaCorta);
    const fechaActual = cambiarFormatoFecha("1/5/2026");

    console.log(String(tipoFecha) == "proximo");
    if (fechaActual >= fechaEvento && tipoFecha == "proximo") {
        console.log("dada")
        return;
    } else if (fechaActual <= fechaEvento && tipoFecha == "anterior") {
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
        <article className={"border-" + color + " bg-white shadow-lg overflow-hidden flex flex-row max-h-40 min-h-30 border-3 border-solid rounded-xl border-r-6 border-b-6"}>
            <div className="min-w-50 max-w-1/4 flex flex-col justify-center items-left">
                <img name="imagen" src={"src/assets/images/" + imagen} alt="imagen del evento" />
            </div>
            <div className="flex flex-col justify-start px-5 py-2">
                <div className="flex flex-col mb-2">
                    <h4 name="titulo" className="font-bold text-xl">
                        {titulo}
                        <span name="categoria" className={"text-" + color + " text-lg font-normal ml-4 "}>{categoria.toUpperCase()}</span>
                    </h4>
                    <h5 name="fecha-y-lugar" className="text-lg">{fechaLarga} &#x2022; {lugar}</h5>
                </div>
                <p name="descripcion" className="text-base">{descripcion}</p>
            </div>

        </article>
    )
}

export default TarjetaEvento