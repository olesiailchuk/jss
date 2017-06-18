import { JssPage } from './app.po';

describe('jss App', () => {
  let page: JssPage;

  beforeEach(() => {
    page = new JssPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
