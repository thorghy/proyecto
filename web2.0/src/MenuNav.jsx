function MenuNav() {

  return (
    <nav
      className="bg-rosa flex flex-row max-lg:flex-col flex-nowrap items-center py-4 px-5 w-full lg:h-13 z-200000 shadow-md/20">
      <img className="max-h-10 pr-10 max-lg:mb-4" src="src\assets\images\logos\happines-and-co-propuesta-06.jpg"
        alt="logotipo" />
        <div className="flex text-white ml-5 space-x-10">
          <a className="text-lg font-bold" href="./index.html">Inicio</a>
          <a className="text-lg" href="./eventos.html">Eventos</a>
          <a className="text-lg" href="./historial-de-eventos.html">Historial de eventos</a>
          <a className="text-lg" href="./sobre-nosotros.html">Sobre nosotros</a>
          <a className="text-lg" href="./fuentes.html">Fuentes</a>
          <a className="text-lg" href="./contacto.html">Contacto</a>
        </div>
    </nav>
  )
}

export default MenuNav
