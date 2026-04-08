function EventoDestacado() {
    return (
        <div name="evento-destacado"
            className="mb-4 flex flex-cola w-full h-75 bg-[url('src/assets/images/san-juan.jpg')] bg-no-repeat bg-center shadow-md/20 relative">
            <div className="absolute bottom-0 flex-col px-7 py-2">
                <h3 className="text-white text-shadow-lg/20">23 de junio de 2026</h3>
                <h2 className="text-white text-shadow-lg/30">Hoguera de San Juan 2026</h2>
            </div>
        </div>
    )
}

export default EventoDestacado