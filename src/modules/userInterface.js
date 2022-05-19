import InvolvementAPI from './involvementAPI.js';
import PopUp from './popUp.js';

const recipeList = document.querySelector('.recipes__list');

export default class UserInterface {
  static displayRecipes(mealsArr, likes = []) {
    mealsArr.forEach((recipe) => {
      const mealLikes = InvolvementAPI.getMealLikes(
        likes,
        recipe.idMeal,
      );
      this.createCard(recipe, mealLikes);
    });
  }

  static displayCategories(categoriesArr) {
    categoriesArr.forEach((category) => {
      this.createCategoryCard(category);
    });
  }

  static createCategoryCard({
    idCategory,
    strCategory,
    strCategoryThumb,
  }) {
    const LI = document.createElement('li');
    LI.classList.add('recipes__card');
    LI.setAttribute('id', idCategory);
    LI.innerHTML = `
      <img class="recipes__image" src="${strCategoryThumb}" alt="Delicious ${strCategory}">
      <div class="recipes__content">
          <div class="recipes__header">
              <h2 class="recipes__title">${strCategory}</h2>
          </div>
          <button class="button categories__button">View recipes!</button>
      </div>
    `;
    recipeList.appendChild(LI);
  }

  static createCard(
    { strMeal = '', strMealThumb = '', idMeal },
    likes = 0,
  ) {
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
          <span class="recipes__likes"><span>${likes}</span> like${
  likes === 1 ? '' : 's'
}</span>
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
      comments = comments.filter(
        (comment) => comment.username !== '',
      );
      PopUp.pop({
        strMeal,
        strMealThumb,
        idMeal,
        comments,
        type: 'Recipe',
      });
    });

    const openReservations = LI.querySelector(
      '.recipes__reservations',
    );
    openReservations.addEventListener('click', () => {
      PopUp.pop({
        strMeal,
        strMealThumb,
        idMeal,
        type: 'Reservation',
      });
    });

    recipeList.appendChild(LI);
  }

  static addToLikesCounterDOM(element) {
    const nLikes = element.querySelector('.recipes__likes');
    const oldLikes = +nLikes.children[0].innerText;
    const newLikes = oldLikes + 1;

    nLikes.innerHTML = `<span>${newLikes}</span> like${
      newLikes === 1 ? '' : 's'
    }`;
  }

  static itemCount() {
    const itemList = document.querySelector('.recipes__list');
    return itemList.children.length;
  }

  static counterText(type) {
    const text = document.querySelector('.navbar__recipes');
    text.innerHTML = `${type} (${this.itemCount()})`;
  }
}
