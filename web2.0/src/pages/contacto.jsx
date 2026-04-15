import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/styles/styles.css'

import MenuNav from '../MenuNav.jsx'
import Pie from '../Pie.jsx'
import MenuContacto from '../MenuContacto.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <header className='lg:h-13'>
      <MenuNav pagina="contacto"></MenuNav>
    </header>

    <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
      <main className='h-fit w-full'>
          <h2 className='mt-4 ml-4'>Contacto</h2>
          <MenuContacto></MenuContacto>
      </main>
      <Pie></Pie>
    </section>
  </>
)
