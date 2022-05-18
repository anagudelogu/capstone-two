import FetchRequest from './fetchRequest.js';
import InvolvementAPI from './involvementAPI.js';
import PopUp from './popUp.js';

const recipeList = document.querySelector('.recipes__list');

export default class UserInterface {
  static displayRecipes(mealsArr) {
    mealsArr.forEach((recipe) => this.createCard(recipe));
  }

  static displayCategories() {}

  static createCard({
    strMeal = '', strMealThumb = '', idMeal, likes = 1,
  }) {
    const LI = document.createElement('li');
    LI.classList.add('recipes__card');
    LI.setAttribute('id', idMeal);
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
    openComments.addEventListener('click', async () => {
      await InvolvementAPI.addComment(
        { username: '', comment: '' },
        idMeal,
      );
      let comments = await InvolvementAPI.getComments(idMeal);
      comments = comments.filter((comment) => comment.username !== '');
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
