import LogoWeb from "../assets/logo.png"
import Carrito from "../assets/carrito.png"
import Lupa from "../assets/search.png"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { useCarrito } from "../CarritoContext";

export default function SearchBar(){
    const { carrito } = useCarrito();
    const [terminoBuscar, setTerminoBuscar] = useState("");
    const navigate = useNavigate();

    const [animate, setAnimate] = useState(false);
    const carritoLibros = carrito.length;

    useEffect(() => {

        setAnimate(true);

        const timeoutId = setTimeout(() => {
        setAnimate(false);
        }, 700);

        return () => clearTimeout(timeoutId);
    }, [carritoLibros]);

    function handleBuscar(){
        navigate(`/buscar?q=${terminoBuscar}`);
    }

    function handleCarrito(){
        navigate("/cesta");
    }

    return (
        <nav className="md:flex md:flex-wrap items-center md:justify-evenly font-robotoSlab">
            {/** LOGO + NOMBRE WEB */}
            <div className="flex items-center gap-4 justify-center">
                <Link to="/"><img className="h-28 w-28" src={LogoWeb} alt="logo web" /></Link>
                <Link to="/"><p className="md:text-5xl text-2xl border-b-8 border-blue-300 pb-1">BookHub</p></Link>
            </div>

            <div className="flex gap-2 items-center justify-center cursor-pointer mt-5">
                {/** BARRA BUSCADORA */}
                <div className="flex items-center bg-white rounded-2xl md:w-full">
                    <input className="md:w-96 bg-transparent text-black p-2 rounded-xl outline-none" 
                    value={terminoBuscar} 
                    type="text" 
                    placeholder="Buscar por título, autor, ISBN..."
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleBuscar();
                        }
                      }}
                    onChange={(e) => setTerminoBuscar(e.target.value)} />

                    <img className="h-7 w-7 mr-3" src={Lupa} alt="buscar" onClick={handleBuscar}/>
                </div>
                {/** CARRITO */}
                <div className="flex md:text-xl rounded-lg md:w-full items-center bg-fondoBoton p-2" onClick={handleCarrito}>
                    <img className="h-6 w-7" src={Carrito} alt="carrito compra" />
                    <button className="ml-5 mr-5">Mi carrito</button>
                    <p
        className={`w-6 h-6 flex items-center justify-center bg-green-700 z-10 absolute rounded-full -mt-5 ml-3 ${
          animate ? 'animated-badge' : ''
        }`}
      >
        {carritoLibros}
      </p>
                </div>
            </div>
        </nav>
    )
}