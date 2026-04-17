import { createRoot } from 'react-dom/client'
import '../assets/styles/styles.css'

import MenuNav from '../componentes_principales/MenuNav.jsx'
import Pie from '../componentes_principales/Pie.jsx'

import Personal from '../personal.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <header className='lg:h-13'>
      <MenuNav pagina="sobre-nosotros"></MenuNav>
    </header>

    <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
      <main className='h-fit w-full flex flex-col items-center'>
        <section name="principal" className="border-rosa border-3 w-fit h-fit m-10 max-lg:m-6 p-14 bg-white rounded-lg shadow-md/20">
          <h2>Sobre nosotros</h2>
          <h3 className='mt-10'>La empresa</h3>
          <section name="imagenes" className='flex flex-col items-center w-280 mt-6 rounded-lg border-3 border-rosa shadow-md/20'>
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
                <p className='text-lg'></p>Perdidos entre la inmensa marea de actividades culturales que existen cada dí a en nuestra ciudad, nos dimos cuenta de que hací a falta buscar un poco de orden y estructura en este inmenso oce ano de posibilidades.<br />Y así surgió HAPPINESS&Co: una agenda cultural que intenta recopilar y organizar todos los eventos culturales, de cualquier tipo, que tienen lugar en nuestra localidad e inmediaciones.
              </div>
              <img className='h-1/5 px-16 w-1/2' src="./src/assets/images/imagenesEventos/13/carnaval-1.jpg" alt="imagen2" />
            </article>

            <article className='flex flex-row shadow-md/20 justify-between items-center bg-black'>
              <div className='p-8 flex flex-col bg-rosa text-white w-1/2 space-y-6'>
                <h2>¡Disfruta!</h2>
                <p className='text-lg'>Música, teatro, exposiciones… Todo tiene cabida en nuestra agenda.<br />Así que… ¡Bienvenidos a HAPPINESS&Co!</p>
              </div>
              <div className='overflow-hidden w-1/2 h-50 '>
                <img className='w-full object-cover' src="./src/assets/images/imagenesEventos/3/silla-concierto.png" alt="imagen" />
              </div>
            </article>
          </section>

          <h3 className='mt-30'>El personal</h3>
          <section name="personal" className='mt-10 p-4 flex flex-col w-280 h-fit border-3 border-rosa rounded-lg shadow-md/20'>
            <Personal 
            nombre="Héctor"
            cargo="Diseñador"
            descripcion="Programador y diseñador de aplicaciones multiplataforma y en web."
            imagen="./src/assets/images/personal/foca.jfif"
            />

            <hr className='my-4 border-rosa border-1 mx-8'/>

            <Personal 
            nombre="Jairo"
            cargo="Traductor"
            descripcion="Licenciado en Oxford en 2024."
            imagen="./src/assets/images/personal/jairo.png"
            />

            <hr className='my-4 border-rosa border-1 mx-8'/>

           <Personal 
            nombre="Héctor 2"
            cargo="Creación de eventos"
            descripcion="Graduado en la universidad de Salamanca. Ingeniero de eventos."
            imagen="./src/assets/images/personal/foca-invertida.jpg"
            />
          </section>
        </section>
      </main>
      <Pie></Pie>
    </section>
  </>
)
