function TarjetaEvento() {
    return (
        <article
            class="bg-white shadow-lg overflow-hidden flex flex-row max-h-40 min-h-30 border-gris border-3 border-solid rounded-xl border-r-6 border-b-6">
            <div class="min-w-50 max-w-1/4 flex flex-col justify-center items-left">
                <img src="src\assets\images\molinon.jpg" alt="imagen del molinón"/>
            </div>
            <div class="flex flex-col justify-start px-3 py-2">
                <div class="flex flex-col mb-2">
                    <h4 class="font-bold text-xl">Real Sporting vs Deportivo La Coruña</h4>
                    <h5 class="text-lg">28 de marzo de 2026</h5>
                </div>
                <p class="text-base">
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