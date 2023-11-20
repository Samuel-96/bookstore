import { useState } from "react"
import SearchBar from "../components/SearchBar"
import PortadaLibro1 from "../assets/wof-cover.jpg"
import PortadaLibro2 from "../assets/got-cover.jpg"
import PortadaLibro3 from "../assets/ce-cover.jpg"
import PortadaLibro4 from "../assets/dracula-cover.jpg"
import LibrosCategoria from "../components/LibrosCategoria"
import Viajes from "../assets/viajes.png"
import Sword from "../assets/sword.png"
import Manga from "../assets/manga.png"
import Ciencia from "../assets/ciencia.png"
import Fiction from "../assets/fiction.png"
import Footer from "../components/Footer"

export default function Home(){

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({categoria: "fantasy", img: Sword});

    return (
        <>
            <main className="flex flex-col h-full">
                {/** PARTE SUPERIOR */}
                
                <div className="imagenFondo">
                    <SearchBar/>
                    <div className="flex p-20 items-center mb-10 mr-10 ml-10 mt-10 font-robotoSlab w-11/12 justify-between">
                        <div className="flex flex-col w-1/2 gap-3">
                            <p className="text-5xl">Tu librería de confianza online</p>
                            <p className="text-2xl">Libros que inspiran, la tienda que transforma</p>
                            <p className="text-xl font-sans">Descubre un universo de posibilidades literarias en nuestra tienda online. Sumérgete en la magia de la lectura desde la comodidad de tu hogar y déjate cautivar por la diversidad de títulos. En cada página, en cada clic, te espera una nueva experiencia literaria. ¡Encuentra tu próxima gran historia con nosotros!</p>
                        </div>
                        <div className="flex gap-5">
                            <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
                            <img className="h-36 w-28 rounded" src={PortadaLibro2} alt="" />
                            <img className="h-36 w-28 rounded" src={PortadaLibro3} alt="" />
                            <img className="h-36 w-28 rounded" src={PortadaLibro4} alt="" />
                        </div>
                    </div>
                </div>

                 {/** PARTE INTERMEDIA */}
                <div className="bg-slate-600 text-black flex flex-col text-2xl">
                <ul className="flex items-center justify-evenly m-1 font-robotoSlab">
                    <div className="flex gap-3 justify-center items-center w-full">
                        <img className="h-10 w-10" src={Sword} alt="" />
                        <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "fantasy", img: Sword})}>Fantasía</li>
                    </div>
                    <div className="flex gap-3 justify-center items-center w-full">
                        <img className="h-10 w-10" src={Fiction} alt="" />
                        <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Ficcion", img: Fiction})}>Ficción</li>
                    </div>
                    <div className="flex gap-3 justify-center items-center w-full">
                        <img className="h-10 w-10" src={Manga} alt="" />
                        <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Manga", img: Manga})}>Manga</li>
                    </div>
                    <div className="flex gap-3 justify-center items-center w-full">
                        <img className="h-10 w-10" src={Viajes} alt="" />
                        <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Viajes", img: Viajes})}>Viajes</li>
                    </div>
                    <div className="flex gap-3 justify-center items-center w-full">
                        <img className="h-10 w-10" src={Ciencia} alt="" />
                        <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Ciencia", img: Ciencia})}>Ciencia</li>
                    </div>              
                </ul>
                
                <div className="bg-zinc-900 m-3 rounded-3xl shadow-2xl text-white">
                    <LibrosCategoria categoria={categoriaSeleccionada}/>
                </div>
                    
                </div>

                 {/** FOOTER */}
                 <Footer/>
            </main>
        </>
    )
}