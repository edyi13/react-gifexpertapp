import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export  const GifExpertApp =  ()=>{
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState (['One Piece']);

    // const handleAdd = (e) =>{
    //     //setCategories([...categories, 'One Punch']);
    //     setCategories(cats => [...categories, 'One Punch']);
    // }
    return(
      <>
        <h2>Segundo Componente React</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr/>
       
        <ol>
           { 
                categories.map( category => (
                     //<li key= {category}>{category}</li>
                    <GifGrid key = { category } category = { category }/>
                ))
           }
        </ol>
      </>
    );
  };