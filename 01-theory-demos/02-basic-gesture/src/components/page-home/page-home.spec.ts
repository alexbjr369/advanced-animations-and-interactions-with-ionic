import { PageHome } from './page-home';
import { newSpecPage } from '@stencil/core/testing';

describe('app-home', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PageHome],
      html: '<page-home></page-home>',
    });
    expect(root.querySelector('ion-title').textContent).toEqual('Home');
  });
});
