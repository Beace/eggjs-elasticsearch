import { Application } from 'egg';

export default (app: Application) => {
  const controller = app.controller;
  app.get('/', controller.home.index);
};
