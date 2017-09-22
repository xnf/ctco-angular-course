import { ComicsPage } from './app.po';

describe('comics App', () => {
  let page: ComicsPage;

  beforeEach(() => {
    page = new ComicsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
