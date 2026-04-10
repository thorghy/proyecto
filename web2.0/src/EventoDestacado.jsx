import datosEventos from "../datos/eventos.json"
import getColor from "./scripts/getColor";

function EventoDestacado() {
    const nEventos = datosEventos.length;
    const eventoRandom = Math.floor(Math.random() * nEventos) + 1;

    const evento = datosEventos.find(evento => evento.id == eventoRandom)
    const categoria = evento.categoria;
    const color = getColor({ categoria });

    console.log(color)
    var imagenPath = "";
    if (evento.poster != null) {
        imagenPath = "src/assets/images/imagenesEventos/" + evento.id + "/" + evento.poster;
    } else {
        imagenPath = "src/assets/images/sin_imagen.png";
    }

    return (
        <a href={"../evento.html?id=" + evento.id}>
        <div name="evento-destacado" className={"mb-4 flex flex-col w-full h-75  shadow-md/20 relative"}>
            <img className="object-cover h-full" src={imagenPath} alt="imagen del evento destacado" />

            <div className="absolute bottom-0 left-0 flex-col px-7 py-2">
              <h3 className="text-white text-shadow-lg/40">{evento.fecha.fechaLarga}</h3>
                <h2 className="text-white text-shadow-lg/40">{evento.titulo}</h2>
            </div>
        </div>
        </a>
    )
}

export default EventoDestacado