import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/styles/styles.css'

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
      <MenuNav pagina="fuentes"></MenuNav>
    </header>

    <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
      <main className='h-fit w-full flex flex-col'>
        <h2 className='mt-4 ml-4'>Sobre nosotros</h2>
        <section name="principal" className="border-rosa border-3 w-full h-fit m-10 max-lg:m-6 p-10 bg-white rounded-lg shadow-md/20">
            
        </section>
      </main>
      <Pie></Pie>
    </section>
  </>
)
