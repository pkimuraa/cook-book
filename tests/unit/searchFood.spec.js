import actions from '../../src/store/search/actions';

describe('search food', () => {
  it('got the food', async () => {
    const payload = 'Big Mac';
    const res = await actions.searchByIngredient(payload);
    expect.arrayContaining(res);
  });
});

describe('search food', () => {
  it('Got Response', async () => {
    await actions.searchByIngredient();
    expect.rejects;
  });
});
