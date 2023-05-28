const API_KEY = " 25c2bae7b8864ff49882acdb11a8bc0c";

async function getRecipes(){
    const response = await fetch('htpps://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}');

    const data = await response.json()

    return data.recipes 
}




async function init(){
    const recipes = await getRecipe()
    console.log(recipes)
}

init()