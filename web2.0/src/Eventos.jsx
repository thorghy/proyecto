import TarjetaEvento from "./TarjetaEvento"
import datosEventos from "../datos/eventos.json"

function Eventos({mostrarEventosProximos}) {
    var titulo = "";

    return (
        <section name="eventos" className="px-7 flex flex-col space-y-4">
            <h2 className="mt-4 mb-4">{mostrarEventosProximos ? "Próximos eventos" : "Historial de eventos"}</h2>

            {datosEventos.map(evento =>
                <TarjetaEvento key={evento.id} evento={evento} mostrarEventosProximos={mostrarEventosProximos}/>
            )}
            <p className="self-center mt-6">No hay más eventos para mostrar.</p>
        </section>
    )
}

export default Eventos