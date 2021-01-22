import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([])
    const { data:images, loading} = useFetchGifs(category);
    // useEffect(() => {
    //     //se usa de esta forma por ser una promesa
    //     getGifs(category).then(imgs => setImages(imgs));
    // },[ category ]) // se envia si la categoria cambia para ejecutar el efecto

    
    
    return (
        <>
        <h3 className='animate__animated animate__bounce animate__fadeIn'>{ category } </h3>

        { loading && <p className='animate__animated animate__bounce animate__flash'>Loading</p> }
        
        <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key = {img.id}
                            //uso del operado spread ---> ...
                            {...img}
                        />
                    ))
                }
        </div>
        </>
        
    )
}
