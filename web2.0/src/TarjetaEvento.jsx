import getColor from "./scripts/getColor";

function TarjetaEvento({ id, titulo, descripcionCorta, fecha, lugar, categoria, poster, mostrarEventosProximos }) {

    const fechaCorta = fecha.fechaCorta;
    const fechaLarga = fecha.fechaLarga;

    function cambiarFormatoFecha(fechaACambiar) {
        const [dia, mes, año] = fechaACambiar.split("/").map(Number);
        return new Date(año, mes - 1, dia);
    }

    const fechaEvento = cambiarFormatoFecha(fechaCorta);
    const fechaActual = cambiarFormatoFecha("1/5/2026");

    if (fechaActual >= fechaEvento && mostrarEventosProximos) { // cancela si se quieren mostrar eventos proximos y la tarjeta no lo es
        return;
    } else if (fechaActual <= fechaEvento && !mostrarEventosProximos) { // cancela si se quieren mostrar eventos pasados y la tarjeta no lo es
        return;
    }

    var imagenPath = "";
    if (poster != null) {
        imagenPath = "src/assets/images/imagenesEventos/" + id + "/"+ poster
    } else {
        imagenPath = "src/assets/images/sin_imagen.png";
    }

    const color = getColor({categoria});

    if (poster == null) {
        poster = "sin_imagen.png";
    }

    return (
        <article className={"border-" + color + " bg-white shadow-md/30 overflow-hidden flex flex-row lg:max-h-40 max-lg:h-45 min-h-30 border-3 border-solid rounded-xl border-r-6 border-b-6"}>
            <div className="min-w-50 w-1/3 max-lg:w-1/2 flex flex-col justify-center items-left">
                <img name="imagen" className="object-cover h-full" src={imagenPath} alt="imagen del evento" />
            </div>
            <div className="flex flex-col justify-start pl-5 pr-2 py-2 w-full">
                <div className="flex flex-col mb-2">
                    <h4 name="titulo" className="font-bold text-xl max-md:text-lg">
                        {titulo}
                        <span name="categoria" className={"text-" + color + " text-lg max-md:text-base font-normal ml-4 "}>{categoria.toUpperCase()}</span>
                    </h4>
                    <h5 name="fecha-y-lugar" className="text-lg max-md:text-base">{fechaLarga} &#x2022; {lugar}</h5>
                </div>
                <div className="flex flex-row justify-between w-full h-full">
                    <div name="contenedor-descripcion" className="overflow-hidden max-h-22">
                        <p name="descripcion" className="text-base">{descripcionCorta}</p>
                    </div>
                    
                    <div className="flex flex-col-reverse items-end w-40">
                        <a href={"../evento.html?id=" + id}>
                            <button className={"bg-" + color + " w-30 h-10 rounded-lg m-2 text-white"}  >Ver más</button>
                        </a>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default TarjetaEvento