import datosEventos from "../datos/eventos.json"
import getColor from "./scripts/getColor";

function TarjetaLateral({nEvento}) {

    const evento = datosEventos.find(evento => evento.id == nEvento)

    var imagenPath = "";
    if (evento.poster != null) {
        imagenPath = "src/assets/images/imagenesEventos/" + evento.id + "/"+ evento.poster
    } else {
        imagenPath = "src/assets/images/sin_imagen.png";
    }

    const categoria = evento.categoria;
    const color = getColor({categoria});

    return (
        <article className="mb-8">
            <div
                className={"border-"+ color + " overflow-hidden mb-2 max-h-35 flex flex-col justify-center rounded-lg border-3 border-solid"}>
                <img src={imagenPath} alt="imagen del evento" />
            </div>
            <h5 className="text-lg font-bold">{evento.titulo}</h5>
            <h6 className="text-base">{evento.fecha.fechaCorta}</h6>
                <p className="text-s mt-2 w-full w-fill">{evento.descripcionCorta}</p>
        </article>
    )
}

export default TarjetaLateral