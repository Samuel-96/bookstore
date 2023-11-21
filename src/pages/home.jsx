import { useState } from "react"
import SearchBar from "../components/SearchBar"
import PortadaLibro1 from "../assets/wof-cover.jpg"
import PortadaLibro2 from "../assets/got-cover.jpg"
import PortadaLibro3 from "../assets/ce-cover.jpg"
import PortadaLibro4 from "../assets/dracula-cover.jpg"
import LibrosCategoria from "../components/LibrosCategoria"
import Ereader from "../assets/ereader.png"
import Viajes from "../assets/viajes.png"
import FondoPubli from "../assets/fondoPubli.png"
import Sword from "../assets/sword.png"
import Manga from "../assets/manga.png"
import Ciencia from "../assets/ciencia.png"
import Fiction from "../assets/fiction.png"
import Footer from "../components/Footer"

export default function Home(){

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({categoria: "fantasy", img: Sword});

    return (
        <>
            <main className="flex flex-col h-full justify-center items-center">
                {/** PARTE SUPERIOR */}
                
                <div className="imagenFondo">
                    <SearchBar/>
                    <div className="md:flex md:p-20 items-center md:mr-10 ml-10 mt-10 font-robotoSlab w-11/12 justify-between fadeIn">
                        <div className="flex flex-col w-1/2 gap-3 font-poppins">
                            <p className="md:text-5xl text-xl font-robotoSlab">Tu librería de confianza online</p>
                            <p className="md:text-2xl">Libros que inspiran, la tienda que transforma</p>
                            <p className="md:text-xl">Descubre un universo de posibilidades literarias en nuestra tienda online. Sumérgete en la magia de la lectura desde la comodidad de tu hogar y déjate cautivar por la diversidad de títulos. En cada página, en cada clic, te espera una nueva experiencia literaria. ¡Encuentra tu próxima gran historia con nosotros!</p>
                        </div>
                        <div className="md:flex gap-5 hidden">
                            <img className="md:h-42 md:w-36 rounded" src={PortadaLibro1} alt="" />
                            <img className="md:h-42 md:w-36 rounded" src={PortadaLibro2} alt="" />
                            <img className="md:h-42 md:w-36 rounded" src={PortadaLibro3} alt="" />
                            <img className="md:h-42 md:w-36 rounded" src={PortadaLibro4} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-row-reverse p-20 items-center mb-10 mr-10 ml-10 font-robotoSlab w-11/12 justify-between fadeIn">
                        <div className="flex flex-col md:w-1/2 gap-3">
                            <p className="md:text-5xl text-2xl text-center">Compra tus libros favoritos, ya sea desde tu móvil o tu ordenador. 📱💻</p>
                            <ul className="md:flex hidden flex-col gap-2 list-disc pl-4 font-poppins">
                                <li className="md:text-xl">Amplia selección de géneros: desde emocionantes novelas hasta apasionantes libros de ciencia</li>
                                <li className="md:text-xl">Encarga pedidos especiales: ¿No encuentras lo que buscas? ¡Lo conseguimos para ti!</li>
                                <li className="md:text-xl">Envío rápido y seguro: Recibe tus libros en la puerta de tu casa.</li>
                            </ul>
                        </div>
                        <div className="flex gap-5">
                            <img className="md:h-auto md:w-max rounded" src={FondoPubli} alt="" />
                        </div>
                    </div>

                    <h1 className="font-robotoSlab md:text-4xl text-center uppercase fadeIn">apasionantes géneros entre los que encontrar tu próxima gran lectura</h1>
                    <div className="flex md:gap-44 justify-center items-center m-5 font-montserrat fadeIn">
                        
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col bg-black pt-2 pl-2 rounded-sm min-w-full">
                                <p className="p-5 bg-green-600 ml-2 rounded-sm text-xl uppercase"  style={{ marginRight: "-1rem" }}>Fantasía</p>
                            </div>
                            <div className="flex flex-col bg-black pt-2 pl-2 rounded-sm min-w-full">
                                <p className="p-5 bg-orange-200 text-black ml-2 rounded-sm text-xl uppercase"  style={{ marginRight: "-1rem" }}>Ciencia ficción</p>
                            </div>
                            <div className="flex flex-col bg-black pt-2 pl-2 rounded-sm min-w-full">
                                <p className="p-5 bg-yellow-300 text-black ml-2 rounded-sm text-xl uppercase"  style={{ marginRight: "-1rem" }}>Viajes</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col bg-black pt-2 pl-2 rounded-sm min-w-full">
                                    <p className="p-5 bg-gray-400 text-black ml-2 rounded-sm text-xl uppercase"  style={{ marginRight: "-1rem" }}>Ciencia</p>
                                </div>
                                <div className="flex flex-col bg-black pt-2 pl-2 rounded-sm min-w-full">
                                    <p className="p-5 bg-amber-900 text-white ml-2 rounded-sm text-xl uppercase"  style={{ marginRight: "-1rem" }}>Ficción histórica</p>
                                </div>
                                <div className="flex flex-col bg-black pt-2 pl-2 rounded-sm min-w-full">
                                    <p className="p-5 bg-cyan-600 text-black ml-2 rounded-sm text-xl uppercase"  style={{ marginRight: "-1rem" }}>Economía</p>
                                </div>
                            </div>
                    </div>

                    <div className="flex justify-center m-10 p-2">
                        <div className="flex">
                            <img className="md:h-96 md:w-96 h-44 w-44" src={Ereader} alt="" />
                            <div className="flex gap-5 flex-col mt-10">
                                <p className="font-robotoSlab text-xl uppercase">Lee tus libros preferidos en formato digital</p>
                                <button className="bg-amber-500 p-2 text-black font-robotoSlab">VER EREADER</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="md:text-3xl m-5 font-robotoSlab border-b-8 border-blue-300 pb-1">ÚLTIMAS NOVEDADES</h1>
                </div>

                 {/** PARTE INTERMEDIA */}
                <div className="bg-zinc-600 text-black flex flex-col md:text-2xl md:w-3/4 w-screen md:m-5 rounded-xl">
                    <ul className="flex items-center justify-evenly m-1 font-robotoSlab">
                        <div className="flex md:gap-3 justify-center items-center w-full">
                            <img className="md:h-10 md:w-10 h-7 w-7" src={Sword} alt="" />
                            <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "fantasy", img: Sword})}>Fantasía</li>
                        </div>
                        <div className="flex md:gap-3 justify-center items-center w-full">
                            <img className="md:h-10 md:w-10 h-7 w-7" src={Fiction} alt="" />
                            <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Ficcion", img: Fiction})}>Ficción</li>
                        </div>
                        <div className="flex md:gap-3 justify-center items-center w-full">
                            <img className="md:h-10 md:w-10 h-7 w-7" src={Manga} alt="" />
                            <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Manga", img: Manga})}>Manga</li>
                        </div>
                        <div className="flex md:gap-3 justify-center items-center w-full">
                            <img className="md:h-10 md:w-10 h-7 w-7" src={Viajes} alt="" />
                            <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Viajes", img: Viajes})}>Viajes</li>
                        </div>
                        <div className="flex md:gap-3 justify-center items-center w-full">
                            <img className="md:h-10 md:w-10 h-7 w-7" src={Ciencia} alt="" />
                            <li className="animacionBoton cursor-pointer" onClick={() => setCategoriaSeleccionada({categoria: "Ciencia", img: Ciencia})}>Ciencia</li>
                        </div>              
                    </ul>
                    
                    <div className="bg-zinc-900 m-3 rounded-3xl shadow-2xl text-white">
                        <LibrosCategoria categoria={categoriaSeleccionada}/>
                    </div>
                    
                </div>

                 {/** FOOTER */}
                 <div className="bg-fondoBoton w-full">
                    <Footer/>
                 </div>
            </main>
        </>
    )
}