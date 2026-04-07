import MenuNav from './MenuNav'
import Lateral from './Lateral'
import Pie from './Pie'
import Contenido from './Contenido'

function App() {

  return (
    <>
      <header className='lg:h-13'>
        <MenuNav></MenuNav>
      </header>
      <section name="scroll" className="overflow-hidden overflow-x-hidden overflow-scroll h-full flex flex-col justify-between">
        <main className='h-fit w-full flex flex-row'>
          <Lateral />
          <Contenido />
        </main>
        <Pie></Pie>
      </section>
    </>
  )
}

export default App
