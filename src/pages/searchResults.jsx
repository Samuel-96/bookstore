import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLibro } from '../api/api';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
let cover = "https://www.chordie.com/images/no-cover.png";

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const libroBuscado = new URLSearchParams(location.search).get('q');
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const librosEncontrados = await getLibro(libroBuscado);
        setLibros(librosEncontrados || []);
      } catch (error) {
        console.error("Error al obtener libros:", error);
        setLibros([]);
      }
    };
  
    fetchLibros();
  }, []);
  
  function handleClick(libro) {
    //navigate(`/buscar/detalleLibro/${libro.id}`);
    navigate(`/buscar/detalleLibro/${libro}`);

  }

  return (
    <div className=''>
      <div className='bg-imagenFondo bg-center bg-no-repeat bg-cover'>
        <SearchBar/>

        <div className='flex items-center flex-col m-5'>
        <h1 className='text-2xl'>4 Resultados de búsqueda para <b>{libroBuscado}</b></h1>
      </div>
      
      <div className='grid grid-cols-5 gap-8 p-8 m-3 rounded'>
        <div className="flex flex-col items-center ">
          <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform cursor-pointer" 
               src={cover} 
               alt="portada del libro" 
               onClick={() => handleClick(1)}/>
          <p>{libroBuscado}</p>
        </div>

        <div className="flex flex-col items-center">
            <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform" src={cover} alt="portada del libro" />
            <p>{libroBuscado}</p>
        </div>

        <div className="flex flex-col items-center">
            <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform" src={cover} alt="portada del libro" />
            <p>{libroBuscado}</p>
        </div>

        <div className="flex flex-col items-center">
            <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform" src={cover} alt="portada del libro" />
            <p>{libroBuscado}</p>
        </div>

        <div className="flex flex-col items-center">
            <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform" src={cover} alt="portada del libro" />
            <p>{libroBuscado}</p>
        </div>

        <div className="flex flex-col items-center">
            <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform" src={cover} alt="portada del libro" />
            <p>{libroBuscado}</p>
        </div>
      </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default SearchResults;

/**

{libros.map((libro)=> {
        //return <p key={libro.id}>{libro.volumeInfo.title}</p>
        if(libro.volumeInfo.hasOwnProperty("imageLinks")){
          cover = libro.volumeInfo.imageLinks.thumbnail;
        } else {
          cover = "https://www.chordie.com/images/no-cover.png"
        }
        return(
            <div key={libro.id} className="flex flex-col items-center">
                    <img className="h-36 w-28 rounded" src={cover} alt="portada del libro" />
                    <p>{libro.volumeInfo.title}</p>
            </div>
        )
      })}

 */