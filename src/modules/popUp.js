import InvolvementAPI from './involvementAPI.js';

export default class PopUp {
  static pop(data) {
    this.data = data;
    this.commentCount = 0;
    this.template(this.data.type);
  }

  static template() {
    const container = document.createElement('div');
    container.setAttribute('id', this.data.idMeal);
    container.setAttribute('class', 'recipes__popup');

    const tags = PopUp.tagsTemplate(this.data.strTags);
    const commentSection = PopUp.commentsTemplate();
    const instructs = PopUp.instructionsTemplate(this.data.strInstructions);

    container.innerHTML = `
      <img class="recipes__popup_image" src="${this.data.strMealThumb}" alt="Delicious ${this.data.strMeal}">
      <i class="fa-solid fa-xmark"></i>
      <h2 class="recipes__popup_title">${this.data.strMeal}</h2>
      <ul class="recipes__popup_tags">${tags}</ul>
      <ul class="recipes__popup_instructs">${instructs}</ul>
      <span class="recipes__popup_video">Watch a <a href="${this.data.strYoutube}">Video</a> here</span>
      ${commentSection}
    `;

    container.querySelector('i').addEventListener('click', () => {
      document.body.classList.remove('noScroll');
      container.remove();
    });

    if (this.data.type === 'Recipe') {
      const user = container.querySelector('input');
      const comment = container.querySelector('textarea');
      const submit = container.querySelector('button');
      const ulContainer = container.querySelector(
        '.recipes__popup_comments ul',
      );

      submit.addEventListener('click', async () => {
        if (user.value === '' || comment.value === '') return;
        const inputComment = {
          username: user.value,
          comment: comment.value,
        };
        PopUp.createCommentOnDOM(
          user,
          comment,
          ulContainer,
          inputComment,
        );
        await InvolvementAPI.addComment(
          inputComment,
          this.data.idMeal,
        );
        PopUp.commentCountAdd(container);
        [user.value, comment.value] = ['', ''];
      });
    }

    document.body.appendChild(container);
  }

  static displayComment(data) {
    const [year, month, day] = data.creation_date.split('-');
    return `
        <li class="recipes__popup_comment">
          <span class="recipes__popup_comment-user">
            <i class="fa-regular fa-user"></i>
            ${data.username}
          </span>
          <span class="recipes__popup_comment-date">
          <i class="fa-regular fa-calendar"></i>
            ${day}-${month}-${year}
          </span>
          <span class="recipes__popup_comment-content">
            ${data.comment}
          </span>
        </li>
      `;
  }

  static commentsTemplate() {
    let comments = '';
    this.data.comments.forEach((comment) => {
      comments += PopUp.displayComment(comment);
    });
    return `
      <div class="recipes__popup_comments">
        <span class="recipes__popup_comment-count">Comments (${this.data.comments.length})</span>
        <input type="text" class="recipes__popup_input-user" placeholder="Username" tabindex=0></input>
        <textarea class="recipes__popup_input-comment" placeholder="Write your comment" tabindex=0></textarea>
        <button class="recipes__popup_input-submit" type="button" tabindex=0>Add Comment</button>
        <ul class="recipes__popup_comments">${comments}</ul>
      </div>
    `;
  }

  static createCommentOnDOM(user, comment, container, inputComment) {
    const [day, month, year] = new Date()
      .toLocaleDateString()
      .split('/');
    const li = PopUp.displayComment({
      ...inputComment,
      creation_date: `${year}-${month < 10 ? '0' : ''}${month}-${
        day < 10 ? '0' : ''
      }${day}`,
    });
    container.innerHTML += li;
  }

  static commentCountAdd(container) {
    this.commentCount += 1;
    const commentsNum = this.data.comments.length + this.commentCount;
    container.querySelector(
      '.recipes__popup_comment-count',
    ).innerHTML = `Comments (${commentsNum})`;
    return commentsNum;
  }

  static instructionsTemplate(instructs) {
    let newInstructs = '';
    instructs.split(/\r?\n/).forEach((line) => {
      newInstructs += `<li class="popup__instructs_line">${line}</li>`;
    });
    return newInstructs;
  }

  static tagsTemplate(tags) {
    if (!tags) return '';
    let tagsUl = '';
    tags.split(',').forEach((tag) => {
      tagsUl += `<li class="recipes__popup_tagLi">${tag}</li>`;
    });
    return tagsUl;
  }
}
