import PortadaLibro1 from "../assets/wof-cover.jpg"
import LogoWeb from "../assets/logo.png"
import {getLibrosPorCategoria} from "../api/api";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loading from "../components/Loading"


let cover = "https://www.chordie.com/images/no-cover.png";

export default function LibrosCategoria({categoria}){
    const navigate = useNavigate();
    const [libros, setLibros] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        const fetchLibros = async () => {
          try {
            const librosCategoria = await getLibrosPorCategoria(categoria);
            setLibros(librosCategoria || []);
            setCargando(false);
          } catch (error) {
            console.error("Error al obtener libros:", error);
            setLibros([]);
          }
        };
        fetchLibros();
      }, [categoria]);
    

    function handleClick(libro){
        navigate(
            `/detalleLibro/${libro.id}`,
            {
              state: {
                libro
              }
            }
          )
    }

    return(
        <div className="m-10 flex flex-col items-center">    
        {cargando && <div className='flex items-center justify-center'><Loading></Loading></div>}
            <div className="flex items-center m-5 gap-3">
                <img className="h-10 w-10" src={LogoWeb} alt="logo web" />
                <h2 className="font-robotoSlab text-xl uppercase">{categoria}</h2>
            </div>
            
            <div className="grid grid-cols-5 gap-10 text-xl font-robotoSlab">
                
            {libros.map((libro)=> {
          //return <p key={libro.id}>{libro.volumeInfo.title}</p>
          if(libro.volumeInfo.hasOwnProperty("imageLinks")){
            cover = libro.volumeInfo.imageLinks.thumbnail;
          } else {
            cover = "https://www.chordie.com/images/no-cover.png"
          }
          return(
            <div key={libro.id} className="flex flex-col items-center ">
              <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform cursor-pointer" 
                  src={cover} 
                  alt="portada del libro" 
                  onClick={() => handleClick(libro)}/>
              <p>{libro.volumeInfo.title}</p>    
          </div>
          )
        })}
                {/*}
                <div className="flex flex-col items-center" onClick={() => handleClick({id: 1, titulo: "el camino de los reyes", portada: PortadaLibro1})}>
                    <img className="h-48 w-40 rounded" src={PortadaLibro1} alt="" />
                    <p>El camino de los reyes</p>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleClick({id: 2, titulo: "asdfasdf", portada: LogoWeb})}>
                    <img className="h-48 w-40 rounded" src={PortadaLibro1} alt="" />
                    <p>El camino de los reyes</p>
                </div>
                  */}
            </div>
        </div>
    )
}