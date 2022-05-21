import PopUp from '../modules/popUp.js';

const createEnv = (comments = []) => {
  PopUp.pop({
    strMeal: 'meal',
    strMealThumb: 'thumb',
    idMeal: 0,
    comments,
    type: 'Recipe',
    strInstructions: '',
  });
  const container = document.createElement('div');
  const el = document.createElement('span');
  el.classList.add('recipes__popup_comment-count');
  container.appendChild(el);
  return [container];
};

describe('Counting number of comments', () => {
  it('Count 0 comments', () => {
    createEnv();
    const num = PopUp.data.comments.length;

    expect(num).toEqual(0);
  });

  it('Add 1 comment', () => {
    const [container1] = createEnv();
    const num = PopUp.commentCountAdd(container1);

    expect(num).toEqual(1);
  });

  it("Add 'n' comments", (n = 8) => {
    const [container2] = createEnv([]);
    let num = 0;
    for (let i = 0; i < n; i += 1) {
      num = PopUp.commentCountAdd(container2);
    }

    expect(num).toEqual(n);
  });
});
