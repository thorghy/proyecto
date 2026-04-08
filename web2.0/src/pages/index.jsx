import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/styles/styles.css'
import App from '../App.jsx'

import MenuNav from '../MenuNav.jsx'
import Lateral from '../Lateral.jsx'
import Pie from '../Pie.jsx'
import MenuConfiguracion from '../MenuConfiguracion.jsx'
import EventoDestacado from "../EventoDestacado"
import OpcionesBusqueda from "../OpcionesBusqueda"
import Eventos from "../Eventos"

createRoot(document.getElementById('root')).render(
  <>
    <header className='lg:h-13'>
      <MenuNav pagina="index"></MenuNav>
    </header>

    <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
      <main className='h-fit w-full flex flex-row'>
        <Lateral />
        <section name="principal" className="w-full h-fit pb-10">
            <EventoDestacado/>
            <OpcionesBusqueda/>
            <Eventos/>
        </section>
      </main>
      <Pie></Pie>
    </section>
  </>
)
