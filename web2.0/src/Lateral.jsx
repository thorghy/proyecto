import TarjetaLateral from "./TarjetaLateral"

function Lateral() {

    return (
        <aside name="menu-lateral" className="pt-6 pl-6 pr-2 max-md:hidden h-full w-100 bg-white border-r-4 border-solid border-rosa flex flex-col">
            <section>
                <h4 class="font-bold text-xl mb-5">Eventos recomendados en tu zona</h4>
                <TarjetaLateral/>
                <TarjetaLateral/>
                
            </section>
        </aside>
    )
}

export default Lateral
