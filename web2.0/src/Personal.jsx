function Personal({nombre, cargo, descripcion, imagen}) {
    return (
        <article className='flex flex-row justify-between p-6'>
              <div className='flex flex-col'>
                <h1 className='text-rosa text-3xl font-bold'>{nombre}</h1>
                <h3 className='text-lg'>{cargo}</h3>
                <p className='text-lg mt-6'>{descripcion}</p>
              </div>
              <img className='w-1/8 rounded-full' src={imagen} alt="imagen de perfil" />
            </article>
    )
}

export default Personal
"./src/assets/images/personal/foca.jfif"