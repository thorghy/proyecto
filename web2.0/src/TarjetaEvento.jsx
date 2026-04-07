function TarjetaEvento() {
    return (
        <article
            className="bg-white shadow-lg overflow-hidden flex flex-row max-h-40 min-h-30 border-gris border-3 border-solid rounded-xl border-r-6 border-b-6">
            <div className="min-w-50 max-w-1/4 flex flex-col justify-center items-left">
                <img src="src\assets\images\molinon.jpg" alt="imagen del molinón"/>
            </div>
            <div className="flex flex-col justify-start px-3 py-2">
                <div className="flex flex-col mb-2">
                    <h4 className="font-bold text-xl">Real Sporting vs Deportivo La Coruña</h4>
                    <h5 className="text-lg">28 de marzo de 2026</h5>
                </div>
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum fermentum eu nulla eget feugiat.
                    Phasellus id tellus vitae eros semper pulvinar eu in sem.
                    Fusce eget consequat magna.
                </p>
            </div>

        </article>
    )
}

export default TarjetaEvento