import MealAPI from './mealAPI.js';
import PopUp from './popUp.js';

const recipeList = document.querySelector('.recipes__list');

export default class UserInterface {
  constructor() {
    this.recipes = {};
    this.categories = {};
  }

  static async displayRecipes(category = 'Pasta') {
    try {
      const pasta = await MealAPI.getByCategory(category);
      pasta.forEach((recipe) => this.createCard(recipe));
    } catch (error) {
      throw new Error(error);
    }
  }

  static async displayCategories() {
    try {
      const pasta = await MealAPI.getCategories();
      pasta.forEach((category) => this.createCard(category));
    } catch (error) {
      throw new Error(error);
    }
  }

  static createCard({
    strMeal = '', strMealThumb = '', idMeal, likes = 1,
  }) {
    const LI = document.createElement('li');
    LI.classList.add('recipes__card');
    LI.innerHTML = `
      <img class="recipes__image" src="${strMealThumb}" alt="Delicious ${strMeal}">
      <div class="recipes__content">
          <div class="recipes__header">
              <h2 class="recipes__title">${strMeal}</h2>
              <i class="fa-regular fa-heart"></i>
          </div>
          <span class="recipes__likes">${likes} like${likes === 1 ? '' : 's'}</span>
          <button class="recipes__comments">Comments</button>
          <button class="recipes__reservations">Reservations</button>
      </div>
    `;

    const openComments = LI.querySelector('.recipes__comments');
    openComments.addEventListener('click', () => {
      const comments = [
        { username: 'Daniel', comment: 'I like this one.', creation_date: 'May 5th' },
        { username: 'Andrés', comment: '5/10', creation_date: 'Feb 19th' },
        { username: 'Joseph', comment: 'AMAZING DISH!!', creation_date: 'Dec 1st' },
      ];
      PopUp.pop({
        strMeal, strMealThumb, idMeal, comments, type: 'Recipe',
      });
    });

    const openReservations = LI.querySelector('.recipes__reservations');
    openReservations.addEventListener('click', () => {
      PopUp.pop({
        strMeal, strMealThumb, idMeal, type: 'Reservation',
      });
    });

    recipeList.appendChild(LI);
  }
}
