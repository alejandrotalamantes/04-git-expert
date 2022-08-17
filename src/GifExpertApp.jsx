import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
  const key = "vH8kbHcu0pcawdCOn0gCn10mgLO7EWW5";

  const [categories, setCategories] = useState(["Dragon Ball Z"]);

  const onAddCategory = (newCategory) => {
    /*  setCategories([...categories, "Valorant"]); */
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  console.log(categories);
  return (
    <>
      <title>Gif Expert</title>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
