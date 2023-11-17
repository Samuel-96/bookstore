import LogoWeb from "../assets/logo.png"
import Carrito from "../assets/carrito.png"
import Lupa from "../assets/search.png"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";

export default function SearchBar(){

    const [terminoBuscar, setTerminoBuscar] = useState("");
    const navigate = useNavigate();

    function handleBuscar(){
        navigate(`/buscar?q=${terminoBuscar}`);
    }

    function handleCarrito(){
        navigate("/cesta");
    }

    return (
        <nav className="flex flex-wrap items-center justify-evenly font-robotoSlab">
            {/** LOGO + NOMBRE WEB */}
            <div className="flex items-center gap-4">
                <Link to="/"><img className="h-28 w-28" src={LogoWeb} alt="logo web" /></Link>
                <Link to="/"><p className="text-5xl">BookHub</p></Link>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
                {/** BARRA BUSCADORA */}
                <div className="flex items-center bg-white rounded-2xl w-full">
                    <input className="w-96 text-xl bg-transparent text-black p-2 rounded-xl outline-none" 
                    value={terminoBuscar} 
                    type="text" 
                    placeholder="La torre oscura"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleBuscar();
                        }
                      }}
                    onChange={(e) => setTerminoBuscar(e.target.value)} />

                    <img className="h-7 w-7 mr-3" src={Lupa} alt="buscar" onClick={handleBuscar}/>
                </div>
                {/** CARRITO */}
                <div className="flex text-xl rounded-lg w-full items-center bg-fondoBoton p-2" onClick={handleCarrito}>
                    <button className="ml-5 mr-5">Mi carrito</button>
                    <img className="h-6 w-7" src={Carrito} alt="carrito compra" />
                </div>
            </div>
        </nav>
    )
}