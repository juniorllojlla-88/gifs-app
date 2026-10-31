import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([
        'dragon ball',
        'valorant',
        'One punch'
    ]);

    const onAddCategory = (newCategory) => {

        if (
            categories.some(
                category => category.toLowerCase() === newCategory.toLowerCase()
            )
        ) {
            return;
        }

        setCategories([...categories, newCategory]);

    };

    return (
        <div className="container">

            <h1>App de gifs</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}

        </div>
    );
};

export default GifExpertApp;