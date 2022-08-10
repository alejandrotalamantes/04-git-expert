import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const key = "vH8kbHcu0pcawdCOn0gCn10mgLO7EWW5";

  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);


  const onAddCategory = () => {
    setCategories([...categories,"Valorant"]);
  }

  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories}/>
      
      

      {/* listado */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* gif item */}
    </>
  );
};

