import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/styles/styles.css'

import MenuNav from '../MenuNav.jsx'
import Lateral from '../Lateral.jsx'
import Pie from '../Pie.jsx'

import datosEventos from "../../datos/eventos.json"

const params = new URLSearchParams(window.location.search);
const idEvento = params.get("id");

const evento = datosEventos.find(event => event.id == idEvento);
console.log(evento);

const categoriasColor = new Map([
  ["musica", "rosa"],
  ["cine", "azul"],
  ["teatro", "azul"],
  ["exposiciones", "naranja"]
]);

let color = "gris"; // color por defecto
if (categoriasColor.has(evento.categoria.toLowerCase())) {
  color = categoriasColor.get(evento.categoria.toLowerCase());
}

createRoot(document.getElementById('root')).render(

  <>
    <header className='lg:h-13'>
      <MenuNav pagina=""></MenuNav>
    </header>

    <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
      <main className='h-full w-full flex flex-row'>
        <Lateral />
        <section name="principal" className={"border-" + color + " border-3 w-full h-fit m-10 max-lg:m-6 p-10 bg-white rounded-lg shadow-md/20"}>
          <div name="separador-imagen" className='flex flex-row justify-between space-x-10'>
            <div name="informacion-del-evento">
              <h4 className={"text-" + color + " text-xl"}>{evento.categoria.toUpperCase()}</h4>
              <h1 className='text-3xl font-bold'>{evento.titulo}</h1>

              <div className='flex flex-col mt-2'>
                <p className='text-xl'>{evento.fecha.fechaLarga}</p>
                <p className='text-xl'>{evento.lugar}</p>
              </div>

              <p className='mt-8'>{evento.descripcion}</p>
            </div>
            <img className='max-h-100 max-w-100 max-lg:max-w-80 rounded-lg shadow-md/30' src={"src/assets/images/" + evento.imagen} alt="poster del evento" />
          </div>


        </section>
      </main>
      <Pie></Pie>
    </section>
  </>
)
