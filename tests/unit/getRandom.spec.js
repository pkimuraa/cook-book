import actions from '../../src/store/search/actions';

describe('get random food', () => {
  it('got food', async () => {
    const res = await actions.randomFood();
    expect.arrayContaining(res);
  });
});
