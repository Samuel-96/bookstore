export default function FichaTecnica(props){
    // Destructuro el libro y volumeInfo
    const { libro } = props;
    const { volumeInfo } = libro || {};
    
    const paginas = volumeInfo?.pageCount || "0";
    const editorial = volumeInfo?.publisher || " ";
    let idioma = volumeInfo?.language || " ";
    switch(idioma){
        case "es": idioma = "español"; break;
        case "en": idioma = "inglés"; break;
    }
    const anyo = volumeInfo?.publishedDate || " ";
    const isbn = volumeInfo?.industryIdentifiers?.[0]?.identifier || "";
    const printType = volumeInfo?.printType || " ";

    return(
        <div className="flex items-center gap-3 flex-col m-10">
            <h1 className="uppercase font-robotoSlab md:text-3xl border-b-2 pb-2 mb-3">Ficha técnica</h1>
            <div className="md:flex items-center md:text-xl md:gap-14 gap-4">
                <div className="flex flex-col">
                    <div className="flex justify-between gap-10">
                        <p className=""><strong>Nº de páginas:</strong></p>
                        <p>{paginas}</p>
                    </div>
                    <div className="flex justify-between gap-10">
                        <p className=""><strong>Editorial:</strong></p>
                        <p>{editorial}</p>
                    </div>
                    <div className="flex justify-between gap-10">
                        <p className=""><strong>Idioma:</strong></p>
                        <p>{idioma}</p>
                    </div>
                </div>

                <div className="flex flex-col">
                <div className="flex justify-between gap-10">
                        <p className=""><strong>Año de publicación:</strong></p>
                        <p>{anyo}</p>
                    </div>
                    <div className="flex justify-between gap-10">
                        <p className=""><strong>ISBN:</strong></p>
                        <p>{isbn}</p>
                    </div>
                    <div className="flex justify-between gap-10">
                        <p className=""><strong>Tipo de impresión:</strong></p>
                        <p>{printType}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}