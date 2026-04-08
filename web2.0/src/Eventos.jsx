import TarjetaEvento from "./TarjetaEvento"
import datosEventos from "../datos/eventos.json"

function Eventos() {

    return (
        <section name="eventos" className="px-7 flex flex-col space-y-4">
            <h2 className="mt-4 mb-4">Próximos eventos</h2>
            
            {datosEventos.map(evento =>
                <TarjetaEvento 
                key={evento.id}
                titulo={evento.titulo}
                descripcion={evento.descripcion}
                fecha={evento.fecha}
                lugar={evento.lugar}
                categoria={evento.categoria}
                imagen={evento.imagen}
                />
            )}
            <p className="self-center mt-6">No hay más eventos para mostrar.</p>
        </section>
    )
}

export default Eventos