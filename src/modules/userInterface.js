const recipeList = document.querySelector('.recipes__list');

export default class UserInterface {
  static displayRecipes(mealsArr) {
    mealsArr.forEach((recipe) => this.createRecipeCard(recipe));
  }

  static createRecipeCard({ strMeal = '', strMealThumb = '' }) {
    const LI = document.createElement('li');
    LI.classList.add('recipes__card');
    LI.innerHTML = `
    <img class="recipes__image" src="${strMealThumb}" alt="Delicious ${strMeal}">
    <div class="recipes__content">
        <div class="recipes__header">
            <h2 class="recipes__title">${strMeal}</h2>
            <i class="fa-regular fa-heart"></i>
        </div>
        <span class="recipes__likes">N likes</span>
        <button class="recipes__comments">Comments</button>
        <button class="recipes__reservations">Reservations</button>
    </div>`;

    recipeList.appendChild(LI);
  }
}
