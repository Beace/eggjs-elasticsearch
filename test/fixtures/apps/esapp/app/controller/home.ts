import { Controller } from 'egg';

declare module 'egg' {
  interface IController {
    home: HomeController;
  }
}

export default class HomeController extends Controller {
  async index() {
    const { app } = this;
    const result = await app.elasticsearch.get("foo").cat.health();
    this.ctx.body = result;
  }
}