import logo from "./assets/images/logos/happines-and-co-propuesta-06.jpg"
import settingsImg from "./assets/icons/settings.png"

function MenuNav() {

  return (
    <nav className="bg-rosa flex flex-row max-lg:flex-col flex-nowrap items-center justify-between py-4 px-5 w-full lg:h-13 z-200000 shadow-md/20">
      <div name="navegacion" className="flex flex-row items-center">
        <img className="max-h-10 pr-10 max-lg:mb-4" src={logo} alt="logotipo" />
        <ul className="flex text-white ml-5 space-x-10">
          <li><a className="text-lg font-bold" href="./index.html">Inicio</a></li>
          <li><a className="text-lg" href="./eventos.html">Eventos</a></li>
          <li><a className="text-lg" href="./historial-de-eventos.html">Historial de eventos</a></li>
          <li><a className="text-lg" href="./sobre-nosotros.html">Sobre nosotros</a></li>
          <li><a className="text-lg" href="./fuentes.html">Fuentes</a></li>
          <li><a className="text-lg" href="./contacto.html">Contacto</a></li>
        </ul>
      </div>
      <button>
        <img className="h-12" src={settingsImg} alt="configuración" />
      </button>
    </nav>
  )
}

export default MenuNav
