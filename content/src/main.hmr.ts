import { bootstrap } from './main';

bootstrap().then((app) => {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
});
