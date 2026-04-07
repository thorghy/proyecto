import EventoDestacado from "./EventoDestacado"
import OpcionesBusqueda from "./OpcionesBusqueda"
import Eventos from "./Eventos"

function Contenido() {
    return (
        <section name="principal" class="w-full h-fit pb-10">
            <EventoDestacado/>
            <OpcionesBusqueda/>
            <Eventos/>
        </section>
    )
}

export default Contenido