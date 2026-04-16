import logo from "../assets/images/logos/happines-and-co-propuesta-06.jpg"

function MenuNav({pagina}) {

  return (
    <nav className="bg-rosa flex flex-row max-lg:flex-col flex-nowrap items-center justify-between py-4 px-5 w-full lg:h-13 z-200000 shadow-md/20">
      <div name="navegacion" className="flex flex-row items-center">
        <img className="max-h-10 pr-10 max-lg:mb-4" src={logo} alt="logotipo" />
        <ul className="flex text-white ml-5 space-x-10 text-lg">
          <li><a className={pagina == "index" ? "font-bold" : ""} href="./index.html">Inicio</a></li>
          <li><a className={pagina == "proximos-eventos" ? "font-bold" : ""} href="../proximos-eventos.html">Eventos</a></li>
          <li><a className={pagina == "historial-eventos" ? "font-bold" : ""} href="../historial-eventos.html">Historial de eventos</a></li>
          <li><a className={pagina == "sobre-nosotros" ? "font-bold" : ""} href="../sobre-nosotros.html">Sobre nosotros</a></li>
          <li><a className={pagina == "fuentes" ? "font-bold" : ""} href="../fuentes.html">Fuentes</a></li>
          <li><a className={pagina == "contacto" ? "font-bold" : ""} href="../contacto.html">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuNav
