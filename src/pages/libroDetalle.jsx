import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { useCarrito } from '../CarritoContext';
import LogoWeb from "../assets/logo.png"
import Footer from '../components/Footer';
let cover;
function LibroDetalle() {

  const { agregarAlCarrito } = useCarrito();
  const { state } = useLocation();
  console.log(state);
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    function generarPrecio() {
      const nuevoPrecio = (Math.random() * 25 + 10).toFixed(2);
      setPrecio(nuevoPrecio);
      state.libro.precio = parseFloat(nuevoPrecio);
    }

    generarPrecio();
  }, []);

  function handleMuestraGratuita(){
    window.open(state.libro.volumeInfo.previewLink, "_blank").focus();
  }

  if(state.libro.volumeInfo.hasOwnProperty("imageLinks")){
    cover = state.libro.volumeInfo.imageLinks.thumbnail;
  } else {
    cover = "https://www.chordie.com/images/no-cover.png"
  }

  return (
    <div className='imagenFondo'>
        <SearchBar/>
        <div className='flex p-10 justify-center flex-wrap gap-10 shadow-lg m-20 rounded bg-zinc-900 items-center '>
            <div className='flex items-center flex-col gap-3'>
                <img className="h-56 w-48 rounded mr-3" 
                    src={cover || state.libro.volumeInfo.imageLinks.thumbnail} 
                alt="portada del libro" />
                <div className='flex items-center rounded text-green-800 bg-white p-2 gap-1 hover:bg-gray-500 hover:text-white' onClick={handleMuestraGratuita}>
                    <img className='h-8 w-8' src={LogoWeb} alt="" />
                    <button>Leer muestra gratuita</button>
                </div>
            </div>

            <div className='flex flex-col gap-2 max-w-lg max-h-96 '>
                <p className='special-box-description font-bold font-robotoSlab uppercase text-3xl'>{state.libro.titulo || state.libro.volumeInfo.title}</p>
                <p className='italic text-2xl text-gray-400'>Autor: {state.libro.volumeInfo.authors} </p>
                <p className='italic text-2xl text-gray-400'>Editorial: {state.libro.volumeInfo.publisher}</p>
                <p className='font-bold'>Número de páginas: {state.libro.volumeInfo.pageCount}</p>
                <p className='special-box-description p-1'>{state.libro.volumeInfo.description}</p>
                
            </div>

            <div className='flex flex-col items-center gap-5 bg-gray-700 p-3 rounded h-fit'>
                <p className='text-3xl font-robotoSlab'>{precio}€</p>
                <button className='bg-slate-900 p-2 rounded text-2xl text-white font-robotoSlab hover:bg-white hover:text-black' onClick={() => agregarAlCarrito(state.libro)}>Añadir a la cesta</button>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
}

export default LibroDetalle;

{/** 
    <div className='grid grid-cols-5 gap-8 p-8'>
        <div className="flex flex-col items-center ">
        <img className="h-44 w-36 rounded mb-3 transform hover:scale-110 transition-transform cursor-pointer" 
            src={cover} 
            alt="portada del libro" />
        <p>{id}</p>
        </div>
    </div>
*/}