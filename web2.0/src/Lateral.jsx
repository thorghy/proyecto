import TarjetaLateral from "./TarjetaLateral"

function Lateral() {

    return (
        <aside name="menu-lateral" className="pt-6 p-5 max-md:hidden h-full w-110 bg-white border-r-3 border-solid border-rosa flex flex-col">
            <section>
                <h4 className="font-bold text-xl mb-5">Eventos recomendados en tu zona</h4>
                <TarjetaLateral nEvento="4"/>
                <TarjetaLateral nEvento="7"/>
                <TarjetaLateral nEvento="10"/>
            </section>
        </aside>
    )
}

export default Lateral
