import LogoWeb from "../assets/logo.png"
import Carrito from "../assets/carrito.png"

export default function SearchBar(){
    return (
        <nav className="flex flex-wrap items-center justify-evenly font-robotoSlab ">
            {/** LOGO + NOMBRE WEB */}
            <div className="flex items-center gap-4">
                <img className="h-28 w-28" src={LogoWeb} alt="logo web" />
                <p className="text-5xl">BookHub</p>
            </div>

            <div className="flex gap-1 items-center">
                {/** BARRA BUSCADORA */}
                <input className="w-96 text-xl text-black p-1 rounded-xl outline-none" type="text" placeholder="buscar por autor, título, género, ISBN..." />

                {/** CARRITO */}
                <div className="flex text-xl rounded-lg gap-5 items-center bg-fondoBoton p-2">
                    <button className="ml-5 mr-5">Mi carrito</button>
                    <img className="h-6 w-7" src={Carrito} alt="" />
                </div>
            </div>
        </nav>
    )
}