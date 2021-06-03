import { useState } from 'react'

const elevenShineRecipe = {
  leatherstripes: 2,
  iron: 1,
  refineStone: 4,
}

const elevenGauntletsRecipe = {
  ...elevenShineRecipe,
  leather: 1,
  refineStone: 10,
}

console.log(elevenShineRecipe)
console.log(elevenGauntletsRecipe)

export default function Recipes() {
  const [recipe, setRecipe] = useState({})

  return (
    <div>
      <h3>Current recipe...</h3>
      <button onClick={() => setRecipe(elevenShineRecipe)}>eleven Shine Recipe</button>
      <button onClick={() => setRecipe(elevenGauntletsRecipe)}>eleven Gauntlets Recipe</button>
      <ul>
        {Object.keys(recipe).map((material) =>
          <li key={material}>{material}: {recipe[material]}</li>
        )}
      </ul>
    </div>
  )
}
