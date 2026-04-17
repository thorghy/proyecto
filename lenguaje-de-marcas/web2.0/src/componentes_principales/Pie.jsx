function Pie() {
    return (
        <footer className="text-white text-lg px-5 pb-2 pt-4 bg-rosa min-h-40 h-40 flex flex-row justify-between">
            <div className="flex flex-row items space-x-8 h-fit">
                <a href="../sobre-nosotros.html"><button>Sobre nosotros</button></a>
                <a href="../contacto.html"><button>Contacto</button></a>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-row-reverse items-center space-x-4">
                    <button>
                        <img className="h-6" src="src\assets\icons\instagram-logo.webp" alt="logo instagram"/>
                    </button>
                    <button>
                        <img className="h-8 ml-2" src="src\assets\icons\youtube-logo.webp" alt="logo youtube"/>
                    </button>
                    <p className="mr-2">Síguenos en nuestras redes sociales:</p>
                </div>
                <div>
                    <p>Todos los derechos reservados &copy; 2026 HAPPINES&Co</p>
                </div>
            </div>
        </footer>
    )
} 

export default Pie