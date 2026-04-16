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
      <main className='h-fit w-full flex flex-row'>
        <section name="principal" className="border-rosa border-3 w-full h-fit m-10 max-lg:m-6 p-10 bg-white rounded-lg shadow-md/20">
            <h2>Sobre nosotros</h2>
            <section name="imagenes" className='flex flex-col items-center mx-50 mt-16 rounded-lg border-3 border-rosa'>
              <article className='flex flex-row shadow-md/20 justify-between items-center'>
                <div className='p-8 flex flex-col bg-rosa text-white w-1/2 space-y-6'>
                  <h2>La experiencia HAPPINES&Co.</h2>
                  <p className='text-lg'>HAPPINESS&Co es una empresa joven y dinámica que se dedica, en cuerpo y alma, al mundo del ocio.</p>
                </div>
                <img className='h-1/5 px-16 w-1/2' src="./src/assets/images/logos/happines-and-co-propuesta-02.png" alt="logo" />
              </article>

              <article className='flex flex-row-reverse shadow-md/20 justify-between items-center bg-black'>
                <div className='p-8 flex flex-col bg-rosa text-white w-1/2 space-y-6'>
                  <h2>Los eventos</h2>
                  <p className='text-lg'></p>Perdidos entre la inmensa marea de actividades culturales que existen cada dí a en nuestra ciudad, nos dimos cuenta de que hací a falta buscar un poco de orden y estructura en este inmenso oce ano de posibilidades.<br/>Y así surgió HAPPINESS&Co: una agenda cultural que intenta recopilar y organizar todos los eventos culturales, de cualquier tipo, que tienen lugar en nuestra localidad e inmediaciones.
                </div>
                <img className='h-1/5 px-16 w-1/2' src="./src/assets/images/imagenesEventos/13/carnaval-1.jpg" alt="imagen2" />
              </article>

              <article className='flex flex-row shadow-md/20 justify-between items-center bg-black'>
                <div className='p-8 flex flex-col bg-rosa text-white w-1/2 space-y-6'>
                  <h2>¡Disfruta!</h2>
                  <p className='text-lg'>Mu sica, teatro, exposiciones… Todo tiene cabida en nuestra agenda.<br/>Así que… ¡Bienvenidos a HAPPINESS&Co!</p>
                </div>
                <div className='overflow-hidden w-1/2 h-50 '>
                  <img className='w-full object-cover' src="./src/assets/images/imagenesEventos/3/silla-concierto.png" alt="imagen" />
                </div>
              </article>
            </section>
        </section>
      </main>
      <Pie></Pie>
    </section>
  </>
)
