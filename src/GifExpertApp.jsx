import React from "react";
import { useState } from "react";

export const GifExpertApp = () => {
  const key = "vH8kbHcu0pcawdCOn0gCn10mgLO7EWW5";

  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}

      {/* listado */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* gif item */}
    </>
  );
};
