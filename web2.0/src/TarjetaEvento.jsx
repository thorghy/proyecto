function TarjetaEvento({titulo, descripcion, fecha, lugar, categoria, imagen}) {
    const imagenPath = "src/assets/images/" + imagen

    const categoriasColor = new Map([
        ["musica", "rosa"],
        ["cine", "azul"],
        ["teatro", "azul"],
        ["exposiciones", "naranja"]
    ]);

    let color = "gris"; // color por defecto
    if (categoriasColor.has(categoria.toLowerCase())) {
        color = categoriasColor.get(categoria.toLowerCase());
    }

    return (
        <article className={"border-" + color + " bg-white shadow-lg overflow-hidden flex flex-row max-h-40 min-h-30 border-3 border-solid rounded-xl border-r-6 border-b-6"}>
            <div className="min-w-50 max-w-1/4 flex flex-col justify-center items-left">
                <img name="imagen" src={"src/assets/images/" + imagen} alt="imagen del molinón"/>
            </div>
            <div className="flex flex-col justify-start px-3 py-2">
                <div className="flex flex-col mb-2">
                    <div className="flex flex-row space-x-4 items-center">
                        <h4 name="titulo" className="font-bold text-xl">{titulo}</h4>
                        <p name="categoria" className={"text-" + color + " text-md"}>{categoria.toUpperCase()}</p>
                    </div>
                    
                    <h5 name="fecha-y-lugar" className="text-lg">{fecha} &#x2022; {lugar}</h5>
                </div>
                <p name="descripcion" className="text-base">{descripcion}</p>
            </div>

        </article>
    )
}

export default TarjetaEvento