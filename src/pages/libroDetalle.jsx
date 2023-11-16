import { useLocation, useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { useCarrito } from '../CarritoContext';

let cover = "https://www.chordie.com/images/no-cover.png";

function LibroDetalle() {
  //const { libro } = useParams();
  const { agregarAlCarrito } = useCarrito();
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
        <SearchBar/>
        <div className='flex p-10 justify-center flex-wrap gap-5'>
            <div className='flex items-center flex-col gap-3'>
                <img className="h-56 w-48 rounded mr-3" 
                    src={state.libro.portada || state.libro.volumeInfo.imageLinks.thumbnail} 
                alt="portada del libro" />
                <div className='flex flex-col items-center gap-3 text-2xl justify-center'>
                    <input className='w-10 text-black text-center' type="number" min={1}/>
                    <button className='bg-red-400 p-2 rounded text-black font-robotoSlab' onClick={() => agregarAlCarrito(state.libro)}>Añadir a la cesta</button>
                </div>
            </div>

            <div className='flex flex-col gap-2 max-w-md max-h-64 '>
                <p className='font-bold font-robotoSlab uppercase text-3xl'>{state.libro.titulo || state.libro.volumeInfo.title}</p>
                <p className='italic text-2xl text-gray-400'>Brandon Sanderson </p>
                <p>Nova</p>
                <p className='overflow-hidden whitespace-wrap text-ellipsis'>El camino de los reyes es el primer volumen de «El Archivo de las Tormentas», el resultado de más de una década de construcción y escritura de universos, convertido en una obra maestra de la fantasía contemporánea en diez volúmenes. Con ella, Brandon Sanderson se postula como el autor del género que más lectores está ganando en todo el mundo. Anhelo los días previos a la Última Desolación. Los días en que los Heraldos nos abandonaron y los Caballeros Radiantes se giraron en nuestra contra. Un tiempo en que aún había magia en el mundo y honor en el corazón de los hombres.</p>
            </div>
        </div>
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