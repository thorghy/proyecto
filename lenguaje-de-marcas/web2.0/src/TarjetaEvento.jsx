import getColor from "./scripts/getColor";

function TarjetaEvento({ evento, mostrarEventosProximos }) {

    const fechaCorta = evento.fecha.fechaCorta;
    const fechaLarga = evento.fecha.fechaLarga;

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
    if (evento.poster != null) {
        imagenPath = "src/assets/images/imagenesEventos/" + evento.id + "/"+ evento.poster
    } else {
        imagenPath = "src/assets/images/sin_imagen.png";
    }

    const categoria = evento.categoria;
    const color = getColor({categoria});

    if (evento.poster == null) {
        evento.poster = "sin_imagen.png";
    }

    return (
        <article className={"border-" + color + " bg-white shadow-md/30 overflow-hidden flex flex-row lg:max-h-40 max-lg:h-45 min-h-30 border-3 border-solid rounded-xl border-r-6 border-b-6"}>
            <div className="min-w-50 w-1/3 max-lg:w-1/2 flex flex-col justify-center items-left">
                <img name="imagen" className="object-cover h-full" src={imagenPath} alt="imagen del evento" />
            </div>
            <div className="flex flex-col justify-start pl-5 pr-2 py-2 w-full">
                <div className="flex flex-col mb-2 max-h-9/20">
                    <h4 name="titulo" className="font-bold text-xl max-md:text-lg">
                        {evento.titulo}
                        <span name="categoria" className={"text-" + color + " text-lg max-md:text-base font-normal ml-4 "}>{categoria.toUpperCase()}</span>
                    </h4>
                    <h5 name="fecha-y-lugar" className="text-lg max-md:text-base">{fechaLarga} &#x2022; {evento.lugar}</h5>
                </div>
                <div className="flex flex-row justify-between w-full h-full">
                    <div name="contenedor-descripcion" className="overflow-hidden max-h-22">
                        <p name="descripcionCorta" className="text-base">{evento.descripcionCorta}</p>
                    </div>
                    
                    <div className="flex flex-col-reverse items-end w-40 mr-2">
                        <a href={"../evento.html?id=" + evento.id}>
                            <button className={"bg-" + color + " w-30 h-10 rounded-lg m-2 text-white"}>Ver más</button>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default TarjetaEvento