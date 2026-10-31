import { useEffect, useState } from 'react';
import GifCard from './GifCard';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const getImages = async () => {

            try {

                setLoading(true);
                setError('');

                const data = await getGifs(category);

                setImages(data);

            } catch (error) {

                console.error(error);
                setError('No se pudieron cargar los GIFs.');

            } finally {

                setLoading(false);

            }

        };

        getImages();

    }, [category]);

    return (
        <div className="gif-grid-container">

            <h3>{category}</h3>

            {loading && <p>Cargando GIFs...</p>}

            {error && <p>{error}</p>}

            <div className="card-grid">

                {images.map((image) => (

                    <GifCard
                        key={image.id}
                        {...image}
                    />

                ))}

            </div>

        </div>
    );
};

export default GifGrid;