import { createRoot } from 'react-dom/client'
import '../assets/styles/styles.css'

import MenuNav from '../componentes_principales/MenuNav.jsx'
import Lateral from '../componentes_principales/Lateral.jsx'
import Pie from '../componentes_principales/Pie.jsx'
import Eventos from "../componentes_principales/Eventos"

createRoot(document.getElementById('root')).render(
  <>
    <header className='lg:h-13'>
      <MenuNav pagina="proximos-eventos"></MenuNav>
    </header>

    <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
      <main className='h-fit w-full flex flex-row'>
        <Lateral />
        <section name="principal" className="w-full h-fit pb-10 pt-4">
            <Eventos mostrarEventosProximos={true} />
        </section>
      </main>
      <Pie></Pie>
    </section>
  </>
)
