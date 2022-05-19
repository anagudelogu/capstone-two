const menuList = document.querySelector('.menu__list');

export default class Menu {
  static displayCategories(categoriesArr) {
    categoriesArr.forEach((category) => {
      this.createDomMenuItem(category);
    });
  }

  static createDomMenuItem({
    idCategory,
    strCategory,
    strCategoryThumb,
  }) {
    const LI = document.createElement('li');
    LI.classList.add('menu__item');
    LI.setAttribute('id', idCategory);
    LI.innerHTML = `<img src="${strCategoryThumb}" alt="Category ${strCategory}"><span>${strCategory}</span>`;

    menuList.appendChild(LI);
  }
}