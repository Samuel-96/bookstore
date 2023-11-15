import PortadaLibro1 from "../assets/wof-cover.jpg"
import LogoWeb from "../assets/logo.png"

export default function LibrosCategoria({categoria}){
    return(
        <div className="m-10">
            
            <div className="flex items-center m-5 gap-3">
                <img className="h-10 w-10" src={LogoWeb} alt="logo web" />
                <h2 className="font-robotoSlab text-xl">{categoria}</h2>
            </div>
            
            <div className="grid grid-cols-5 gap-3">
                <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
                <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
                <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
                <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
                <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
                <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
                <img className="h-36 w-28 rounded" src={PortadaLibro1} alt="" />
            </div>
        </div>
    )
}