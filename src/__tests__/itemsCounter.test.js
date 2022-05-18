import UserInterface from '../modules/userInterface.js';

describe('Counting number of items', () => {
  beforeEach(() => {
    document.body.innerHTML = `
              <div>
                  <ul class="recipes__list">
                  </ul>
              </div>`;
  });
  it('Returns 0 if there are no items present in the List', () => {
    expect(UserInterface.itemCount()).toBe(0);
  });

  it('Returns 1 when an item get added to the list.', () => {
    const LIST = document.querySelector('.recipes__list');
    const LI = document.createElement('li');
    LIST.appendChild(LI);
    expect(UserInterface.itemCount()).toBe(1);
  });

  it('Returns n when n items get added to the list', () => {
    const LIST = document.querySelector('.recipes__list');
    const n = 8;
    for (let i = 0; i < n; i += 1) {
      const LI = document.createElement('li');
      LIST.appendChild(LI);
    }
    expect(UserInterface.itemCount()).toBe(n);
  });
});
