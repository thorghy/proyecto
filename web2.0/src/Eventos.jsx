import TarjetaEvento from "./TarjetaEvento"

function Eventos() {
    return (
        <section name="eventos" class="px-7 flex flex-col space-y-4">
            <h2 class="mt-4 mb-4">Próximos eventos</h2>
            <TarjetaEvento />
            <TarjetaEvento />
            <p class="self-center mt-6">No hay más eventos para mostrar.</p>
        </section>
    )
}

export default Eventos