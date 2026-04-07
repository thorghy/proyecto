function Pie() {
    return (
        <footer class="text-white text-lg px-5 pb-2 pt-4 bg-rosa min-h-40 h-40 flex flex-row justify-between">
            <div class="flex flex-row items space-x-8 h-fit">
                <button>Sobre nosotros</button>
                <button>Contacto</button>
            </div>
            <div class="flex flex-col justify-between">
                <div class="flex flex-row-reverse items-center space-x-2">
                    <button>
                        <img class="h-6" src="src\assets\icons\instagram-logo.webp" alt="logo instagram"/>
                    </button>
                    <button>
                        <img class="h-8 ml-2" src="src\assets\icons\youtube-logo.webp" alt="logo youtube"/>
                    </button>
                    <p>Síguenos en nuestras redes sociales:</p>
                </div>
                <div>
                    <p>Todos los derechos reservados &copy 2026 HAPPINES&Co</p>
                </div>
            </div>
        </footer>
    )
} 

export default Pie