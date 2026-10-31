export const getGifs = async (category) => {

    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    if (!apiKey) {
        throw new Error('Falta configurar la clave de GIPHY');
    }

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=5&rating=g&lang=es`;

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error('Error al consultar GIPHY');
    }

    const { data = [] } = await respuesta.json();

    return data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

};