export default class PopUp {
  static pop(data) {
    this.data = data;
    this.template(this.data.type);
  }

  static template() {
    const container = document.createElement('div');
    container.setAttribute('id', this.data.idMeal);
    container.setAttribute('class', 'recipes__popup');

    const commentSection = PopUp.commentsTemplate(this.data.type);
    const reservationSection = PopUp.reservationsTemplate(this.data.type);

    container.innerHTML = `
      <img class="recipes__popup_image" src="${this.data.strMealThumb}" alt="Delicious ${this.data.strMeal}">
      <i class="fa-solid fa-xmark"></i>
      <h2>${this.data.strMeal}</h2>
      
      ${commentSection}
      ${reservationSection}
    `;
    container.querySelector('i').addEventListener('click', () => {
      container.remove();
    });
    document.body.appendChild(container);
  }

  static commentsTemplate(type) {
    if (type !== 'Recipe') return '';
    let comments = '';
    this.data.comments.forEach((comment) => {
      comments += `
        <li class="recipes__popup_comment">
          <span class="recipes__popup_comment-user">
            ${comment.username}:
          </span>
          <span class="recipes__popup_comment-content">
            ${comment.comment}
          </span>-
          <span class="recipes__popup_comment-date">
            ${comment.creation_date}
          </span>
        </li>
      `;
    });
    return `
      <div>
        <span>Comments (${this.data.comments.length})</span>
        <ul class="recipes__popup_comments">${comments}</ul>
        <input class="recipes__popup_input-user" placeholder="User" tabindex=0></input>
        <input  class="recipes__popup_input-comment" placeholder="Comment" tabindex=0></input>
        <button class="recipes__popup_input-submit" type="button" tabindex=0>Comment</button>
      </div>
    `;
  }

  static reservationsTemplate(type) {
    if (type !== 'Reservation') return '';
    return '';
  }

  static submitComment() {}
}