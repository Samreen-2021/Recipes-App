const API_KEY = 'fcd4f7f64bc94ee8b50d1c04cc6d91e3';
fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=fcd4f7f64bc94ee8b50d1c04cc6d91e3&query=pasta')
.then(response => {
return response.json();
}).then(recipeArray)
.catch(function (err) {
  console.log(err);
});;
function recipeArray(obj){
  let reciepes = obj.results;
  console.log(reciepes);
  console.log(typeof reciepes);
  document.getElementById("app").innerHTML =(reciepes.map(recipe => 
    `
    <div class="coloumn">
      <div class="card_content">
        <img  src="${recipe.image}" />
        <div class= "title">${recipe.title}</div>
     </div> 
    </div>`
).join(''));
}