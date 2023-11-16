const apiKey = "AIzaSyBhQ97oUY5ym3aW3YDlBMLAr7hW0nm2hAc";
const baseUrl = "https://www.googleapis.com/books/v1/volumes";

async function getLibrosPorCategoria(categoria){
    try {
        const response = await fetch(`${baseUrl}?q=subject:${categoria}&key=${apiKey}&fields=items(id,volumeInfo)`);
        const data = await response.json();
        console.log(data)
        return data.items;
    } catch (error) {
        throw new Error(error);
    }
}

async function getLibro(libro){
    try {
        const response = await fetch(`${baseUrl}?q=${libro}&key=${apiKey}&fields=items(id,volumeInfo)&maxResults=1`);
        const data = await response.json();
        console.log(data)
        return data.items;
    } catch (error) {
        throw new Error(error);
    }
}

export {getLibrosPorCategoria, getLibro};