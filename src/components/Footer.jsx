import LogoWeb from "../assets/logo.png"

export default function Footer(){
    return(
        <footer>
                <div className="flex flex-col gap-3 text-center p-1 items-center justify-center text-2xl">
                    <div className="flex gap-5 m-3">
                        <div className="">
                            <h3 className="font-robotoSlab uppercase">Vende con nosotros</h3>
                            <ul className="text-white mt-3">
                                <li><a  href="#">Comenzar a vender</a></li>
                                <li><a href="#">Programa de afiliados</a></li>
                                <li><a href="#">Recomendar un vendedor</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-robotoSlab uppercase">Sobre nosotros</h3>
                            <ul className="text-white mt-3">
                                <li><a href="#">Compañía</a></li>
                                <li><a href="#">Equipo</a></li>
                                <li><a href="#">Política de privacidad</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-10 w-10 flex gap-5 justify-center">
                        <img src={LogoWeb} alt="" />
                        <img src={LogoWeb} alt="" />

                        <img src={LogoWeb} alt="" />
                    </div>

                    <a href="https://github.com/Samuel-96" target="blank" className="copyright font-robotoSlab">Samuel-96</a>
                </div>
                
        </footer>
    )
}