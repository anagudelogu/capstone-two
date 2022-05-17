import MealAPI from './mealAPI.js';

const recipeList = document.querySelector('.recipes__list');

export default class UserInterface {
  static async displayRecipes() {
    try {
      const pasta = await MealAPI.getByCategory('Pasta');
      pasta.forEach((recipe) => this.createRecipeCard(recipe));
    } catch (error) {
      throw new Error(error);
    }
  }

  static createRecipeCard({ strMeal = '', strMealThumb = '' }) {
    const LI = document.createElement('li');
    LI.classList.add('recipes__card');

    const img = document.createElement('img');
    img.src = strMealThumb;
    img.classList.add('recipes__image');
    img.setAttribute('alt', `Delicious ${strMeal}`);

    const content = document.createElement('div');
    content.classList.add('recipes__content');

    const header = document.createElement('div');
    header.classList.add('recipes__header');

    const title = document.createElement('h2');
    title.innerHTML = strMeal;
    title.classList.add('recipes__title');

    const likeBtn = document.createElement('i');
    likeBtn.setAttribute('class', 'fa-regular fa-heart');

    header.appendChild(title);
    header.appendChild(likeBtn);

    const likes = document.createElement('span');
    likes.classList.add('recipes__likes');
    likes.innerHTML = 'N likes';

    const comments = document.createElement('button');
    comments.classList.add('recipes__comments');
    comments.innerHTML = 'Comments';

    const reservations = document.createElement('button');
    reservations.classList.add('recipes__reservations');
    reservations.innerHTML = 'Reservations';

    content.appendChild(header);
    content.appendChild(likes);
    content.appendChild(comments);
    content.appendChild(reservations);

    LI.appendChild(img);
    LI.appendChild(content);

    recipeList.appendChild(LI);
  }
}
