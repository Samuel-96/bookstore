import { useState } from "react"
import SearchBar from "../components/SearchBar"
import PortadaLibro1 from "../assets/wof-cover.jpg"
import PortadaLibro2 from "../assets/got-cover.jpg"
import PortadaLibro3 from "../assets/ce-cover.jpg"
import PortadaLibro4 from "../assets/dracula-cover.jpg"
import LibrosCategoria from "../components/LibrosCategoria"
import Footer from "../components/Footer"

export default function Home(){

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("fantasy");

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
                <div className="bg-slate-300 text-black flex flex-col text-xl">
                <ul className="flex items-center justify-evenly m-1 font-robotoSlab">
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("fantasy")}>Fantasía</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Ficcion")}>Ficción</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Manga")}>Manga</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Viajes")}>Viajes</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Ciencia")}>Ciencia</li>
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