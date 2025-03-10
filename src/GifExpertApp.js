import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch'])
  
  //const handleAdd = () => {
      //setCategories([...categories, 'HunterXHunter'] ); agrega hunterxhunter al final 
  //    setCategories(['HunterXHunter', ...categories,] ); //agrega al inicio
      //setCategories(cats => [...cats,'HunterXHunter'] ); otra forma de hacerlo
  //}


  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

      

      <ol>
          {
            categories.map( category => 
               //<li key={category}>{category}</li> //key es obligatorio
               (<GifGrid 
                  key = { category }
                  category = { category }
               />)
            )
          }
      </ol>
    </>
  )
}


