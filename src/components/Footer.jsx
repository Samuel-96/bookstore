import LogoWeb from "../assets/logo.png"

export default function Footer(){
    return(
        <footer>
                <div className="flex flex-col gap-3 text-center p-1 items-center justify-center md:text-2xl">
                    <div className="flex gap-5 m-3 border-b-2 border-r-2 pr-2 border-l-2 pl-2 pb-2 shadow-xl">
                        <div className="">
                            <h3 className="font-robotoSlab uppercase">Vende con nosotros</h3>
                            <ul className="text-white mt-3">
                                <li><a className="font-poppins" href="#">Comenzar a vender</a></li>
                                <li><a className="font-poppins" href="#">Programa de afiliados</a></li>
                                <li><a className="font-poppins" href="#">Recomendar un vendedor</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-robotoSlab uppercase">Sobre nosotros</h3>
                            <ul className="text-white mt-3">
                                <li><a className="font-poppins" href="#">Compañía</a></li>
                                <li><a className="font-poppins" href="#">Equipo</a></li>
                                <li><a className="font-poppins"href="#">Política de privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-10 w-10 flex gap-5 justify-center">
                        <img src={LogoWeb} alt="" />
                        <img src={LogoWeb} alt="" />

                        <img src={LogoWeb} alt="" />
                    </div>

                    <a href="https://github.com/Samuel-96" target="blank" className="copyright font-robotoSlab">GitHub: Samuel-96</a>
                </div>
                
        </footer>
    )
}