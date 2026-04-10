function FotoGaleria({imagenPath}) {
    return (
        <div className="w-3/7 aspect-video mb-14 rounded-lg overflow-hidden shadow-md/30">
            <img className="" src={imagenPath} alt="imagen del evento" />
        </div>
    )
}

function VisualizadorGaleria({ evento, galeria }) {
    if (galeria !== null) {
        const galeriaPath = "src/assets/images/imagenesEventos/" + evento.id + "/galeria";
        console.log(galeria)
        return (
            <>
                <div name="encabezado-galeria" className='flex flex-row space-x-4 mb-8'>
                    <h3 className='font-bold'>Galería</h3>
                    <h3>Titulo de la galería IMPLEMENTAR</h3>
                </div>
                <section className="flex flex-row flex-wrap justify-between">
                    {
                    Object.entries(galeria).map(([id, src]) =>
                            <FotoGaleria key={id} imagenPath={galeriaPath + "/" + src} />
                    )}
                </section>
            </>
        )
    }
    return (
        <>
            <div name="encabezado-galeria" className='flex flex-row space-x-4 mb-8'>
                <h3 className='font-bold'>Galería</h3>
            </div>
            <p>Esto evento aún no cuenta con una galería.</p>
        </>
    )
}

export default VisualizadorGaleria