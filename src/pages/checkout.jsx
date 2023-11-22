import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import { useCarrito } from "../CarritoContext";
import { useMemo } from "react";

export default function Checkout(){
    const { carrito, eliminarDelCarrito } = useCarrito();

    const precioTotal = useMemo(() => {
        return carrito.reduce((total, libro) => total + libro.precio * libro.cantidad, 0);
    }, [carrito])
/*
    let cantidadTotal = 0;

    carrito.forEach((libro) => {
        cantidadTotal += libro.precio * libro.cantidad;
    })

    cantidadTotal = cantidadTotal.toFixed(2);

*/

    return (
        <>
            <div className="imagenFondo fadeIn">
                <SearchBar/>

                <div className="flex flex-wrap justify-evenly gap-20 m-10 items-center">
                    <div className="flex flex-col m-5 p-5">

                    {carrito.map((libro) => {
                        let cover = "https://www.chordie.com/images/no-cover.png";

                        if (libro.volumeInfo && libro.volumeInfo.hasOwnProperty("imageLinks")) {
                            cover = libro.volumeInfo.imageLinks.thumbnail;
                        }

                        return (
                            <div key={libro.id} className="flex gap-5 bg-gray-700 rounded p-3 md:max-w-3xl mb-20 border-b-2 pb-2">
                                <img className="h-44 w-36 rounded mb-3" src={cover} alt="portada del libro" />
                                <div className="flex flex-col justify-between">
                                    <p className="md:text-3xl font-robotoSlab">{libro.volumeInfo.title}</p>
                                    <p className="bold text-gray-400 md:text-xl">Precio: {libro.precio}</p>
                                    <p className="bold text-gray-400 md:text-xl">Cantidad: {libro.cantidad}</p>
                                    <button className="md:p-2 md:w-4xl rounded bg-red-800 text-white font-robotoSlab" onClick={() => eliminarDelCarrito(libro.id)}>Eliminar libro</button>
                                </div>
                            </div>
                        );
                    })}

                    </div>

                    <div className="bg-stone-800 text-white p-3 max-h-96 flex flex-col justify-between m-10">
                        
                        <div>
                            <p className="font-robotoSlab text-3xl underline">RESUMEN DEL PEDIDO</p>
                            <div className="font-mono text-xl mt-5 flex flex-col gap-5 p-2">
                                <div>
                                    <div className="flex justify-between">
                                        <p>Subtotal</p>
                                        <p>{precioTotal}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Gastos de envío</p>
                                        <p>0€</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between"><p>Total</p><p>{precioTotal}€</p></div>
                            </div>
                        </div>

                        <button className="bg-slate-400 rounded text-2xl font-robotoSlab p-1 text-black hover:bg-green-700 hover:text-white">Pagar</button>
                        
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}