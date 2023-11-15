import { useState } from "react"

import SearchBar from "../components/SearchBar"
import PortadaLibro1 from "../assets/wof-cover.jpg"
import PortadaLibro2 from "../assets/got-cover.jpg"
import PortadaLibro3 from "../assets/ce-cover.jpg"
import PortadaLibro4 from "../assets/dracula-cover.jpg"
import LibrosCategoria from "../components/LibrosCategoria"

export default function Home(){

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Novedades");

    return (
        <>
            <main className="flex flex-col h-full">
                {/** PARTE SUPERIOR */}
                <div className="bg-imagenFondo bg-center bg-no-repeat bg-cover">
                    <SearchBar/>
                    <div className="flex p-20 items-center mb-10 mr-10 ml-10 font-robotoSlab w-11/12 justify-between">
                        <div className="flex flex-col w-1/2">
                            <p className="text-5xl">Tu tienda de confianza online</p>
                            <p className="text-2xl">Libros que inspiran, la tienda que transforma</p>
                            <p className="text-lg font-sans">Descubre un universo de posibilidades literarias en nuestra tienda online. Sumérgete en la magia de la lectura desde la comodidad de tu hogar y déjate cautivar por la diversidad de títulos. En cada página, en cada clic, te espera una nueva experiencia literaria. ¡Encuentra tu próxima gran historia con nosotros!</p>
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
                <div className="bg-slate-300 text-black flex flex-col">
                <ul className="flex items-center justify-evenly m-1 font-robotoSlab">
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Novedades")}>Novedades</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Ficción")}>Ficción</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("No ficción")}>No ficción</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Viajes")}>Viajes</li>
                    <li className="hover:bg-slate-400 p-3 cursor-pointer" onClick={() => setCategoriaSeleccionada("Ciencia")}>Ciencia</li>
                </ul>

                    <LibrosCategoria categoria={categoriaSeleccionada}/>
                </div>

                 {/** FOOTER */}
                 <footer>
                    footer
                 </footer>
            </main>
        </>
    )
}