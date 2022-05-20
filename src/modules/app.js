import '../index.css';
import logo from '../assets/burger-logo.png';
import UserInterface from './userInterface.js';
import MealAPI from './mealAPI.js';
import CurrentCategory from './currentCategory.js';
import CurrentMeal from './currentMeal.js';
import InvolvementAPI from './involvementAPI.js';
import PopUp from './popUp.js';
import Menu from './menu.js';

export default class App {
  constructor () {
    this.imageContainer = document.querySelectorAll('.image');
    this.asyncEnv();
  }
  
  setLogo() {
    Array.from(this.imageContainer).forEach((container) => {
      const logoImg = new Image();
      logoImg.src = logo;
      logoImg.classList.add('hero__logo');
      logoImg.alt = 'Yummy Recipes Logo';
      container.appendChild(logoImg);
    });
  }

  async asyncEnv() {
    this.setLogo()
    const categories = await MealAPI.getCategories();
    Menu.displayCategories(categories);
    UserInterface.displayCategories(categories);
    UserInterface.counterText('Categories');
    this.selectTags();
    this.setListeners();
  };

  goBackToCommonParent = (node, a) => {
    if (node.getAttribute(a.type).includes(a.item)
        !== node.parentNode.getAttribute(a.type).includes(a.item)
    ) return node;
    return this.goBackToCommonParent(node.parentNode, a);
  };

  toggleMenu() {
    document.body.classList.toggle('noScroll');
    document.querySelector('.menu').classList.toggle('active');
  };

  closeMenu() {
    document.body.classList.remove('noScroll');
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.hero').classList.remove('hidden');
  }

  hideLanding() {
    document.querySelector('.hero').classList.add('hidden');
  }

  async selectCategory(clickedElement) {
    const parent = this.goBackToCommonParent(
      clickedElement,
      { type: 'class', item: 'category' }
    );
    const categoryName = parent.children[1].innerText;
    this.LIST.innerHTML = '';
    const category = await MealAPI.getByCategory(categoryName);
    const allLikes = await InvolvementAPI.getAllLikes();
    const currentCategory = new CurrentCategory(category);
    UserInterface.displayRecipes(currentCategory.meals, allLikes);
    UserInterface.counterText('Recipes');
    this.hideLanding();
  }

  async menuLoadCategories(clickedElement) {
    const parent = this.goBackToCommonParent(
      clickedElement,
      { type: 'class', item: 'menu__item' }
    );
    const categoryName = parent.children[1].innerText;
    this.LIST.innerHTML = '';
    const categories = await MealAPI.getByCategory(categoryName);
    const allLikes = await InvolvementAPI.getAllLikes();
    const currentCategory = new CurrentCategory(categories);
    UserInterface.displayRecipes(currentCategory.meals, allLikes);
    UserInterface.counterText('Recipes');
    this.hideLanding();
    this.toggleMenu();
  }

  async logoLoadCategories() {
    this.LIST.innerHTML = '';
    const categories = await MealAPI.getCategories();
    UserInterface.displayCategories(categories);
    UserInterface.counterText('Categories');
    this.closeMenu();
  }

  async addLike(clickedElement) {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await InvolvementAPI.addLike(mealId);
    UserInterface.addToLikesCounterDOM(card);
  }

  async loadPopup(clickedElement) {
    const card = clickedElement.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    const meal = await MealAPI.getRecipe(mealId);

    await InvolvementAPI.addComment(
      { username: '', comment: '' },
      mealId,
    );

    let comments = await InvolvementAPI.getComments(mealId);
    comments = comments.filter((comment) => comment.username !== '');
    const currentMeal = new CurrentMeal(meal, comments);

    PopUp.pop({
      ...currentMeal,
      comments,
      type: 'Recipe',
    });
  }

  setListeners() {
    this.menuToggler.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.toggleMenu();
      });
    });
    this.menuItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        const clickedElement = e.target;
        this.menuLoadCategories(clickedElement);
      });
    });
    this.heroLogos.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.logoLoadCategories();
      });
    });

    this.LIST.addEventListener('click', (e) => {
      const clickedElement = e.target;

      if (clickedElement.getAttribute('class').includes('category')) {
        this.selectCategory(clickedElement);
        return;
      }

      if (clickedElement.classList.contains('fa-heart')) {
        this.addLike(clickedElement);
        return;
      }

      if (clickedElement.classList.contains('recipes__comments')) {
        this.loadPopup(clickedElement);
        return;
      }
    });
  }

  selectTags() {
    this.menuToggler = document.querySelectorAll('.menu-toggle');
    this.menuItems = document.querySelectorAll('.menu__item');
    this.heroLogos = document.querySelectorAll('.hero__logo');
    this.LIST = document.querySelector('.list');
  }
}