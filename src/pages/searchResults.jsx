import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLibro } from '../api/api';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Loading from "../components/Loading"

let cover = "https://www.chordie.com/images/no-cover.png";

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const libroBuscado = new URLSearchParams(location.search).get('q');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const librosEncontrados = await getLibro(libroBuscado);
        setLibros(librosEncontrados || []);
        setCargando(false);
      } catch (error) {
        console.error("Error al obtener libros:", error);
        setLibros([]);
      }
    };
  
    fetchLibros();
  }, [libroBuscado]);
  
  
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

  return (

    <div className='fadeIn'>
      <div className='fondoDetalle'>
        <SearchBar/>

        <div className='flex items-center flex-col m-5'>
        <h1 className='text-2xl'>{libros.length} Resultados de búsqueda para <b>{libroBuscado}</b></h1>
      </div>
      {cargando && <div className='flex items-center justify-center'><Loading></Loading></div>}
      <div className='grid grid-cols-5 gap-8 m-5 justify-center rounded items-center'>
        
        {libros.map((libro)=> {
          //return <p key={libro.id}>{libro.volumeInfo.title}</p>
          if(libro.volumeInfo.hasOwnProperty("imageLinks")){
            cover = libro.volumeInfo.imageLinks.thumbnail;
          } else {
            cover = "https://www.chordie.com/images/no-cover.png"
          }
          return(
            <div key={libro.id} className="flex flex-col items-center text-center font-robotoSlab text-base">
              <img className="h-48 w-36 rounded mb-3 transform hover:scale-110 transition-transform cursor-pointer" 
                  src={cover} 
                  alt="portada del libro" 
                  onClick={() => handleClick(libro)}/>
              <p>{libro.volumeInfo.title}</p>    
          </div>
          )
        })}
      </div>
    </div>
      
      <Footer/>
    </div>
  );
}

export default SearchResults;