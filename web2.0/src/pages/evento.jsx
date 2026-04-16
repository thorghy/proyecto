import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/styles/styles.css'

import MenuNav from '../componentes_principales/MenuNav.jsx'
import Lateral from '../componentes_principales/Lateral.jsx'
import Pie from '../componentes_principales/Pie.jsx'
import VisualizadorGaleria from '../VisualizadorGaleria.jsx'

import datosEventos from "../../datos/eventos.json"

const parametrosURL = new URLSearchParams(window.location.search);
const idEvento = parametrosURL.get("id");

const evento = datosEventos.find(event => event.id == idEvento);
console.log(evento);

const imagenPath = "src/assets/images/imagenesEventos/" + evento.id + "/"+ evento.poster

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
      <MenuNav></MenuNav>
    </header>

    <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
      <main className='h-fit w-full flex flex-row'>
        <Lateral />
        <section name="principal" className={"border-" + color + " border-3 w-full h-fit m-10 max-lg:m-6 p-10 bg-white rounded-lg shadow-md/20"}>
          <div name="separador-imagen" className='flex flex-row justify-between space-x-10 pb-10 max-h-100'>
            <section name="informacion-del-evento">
              <h4 className={"text-" + color + " text-xl"}>{evento.categoria.toUpperCase()}</h4>
              <h1 className='text-3xl font-bold'>{evento.titulo}</h1>

              <div className='flex flex-col mt-2'>
                <p className='text-xl'>{evento.fecha.fechaLarga}</p>
                <p className='text-xl'>{evento.lugar}</p>
              </div>

              <p className='mt-12'>{evento.descripcionCorta}</p>
            </section>
            <img name="poster" className='max-h-100 max-w-100 max-lg:max-w-80 rounded-lg shadow-md/30' src={imagenPath} alt="poster del evento" />
          </div>
          <section name="seccion-descripcion">
            <h3 className='font-bold'>Descripción</h3>
            <p className='mt-4 text-lg'>{evento.descripcionLarga}</p>
          </section>
          <section name="seccion-galeria" className='mt-20'>
            <VisualizadorGaleria evento={evento} galeria={evento.galeria}/>
          </section>
        </section>
      </main>
      <Pie></Pie>
    </section>
  </>
)
