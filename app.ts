import { Application } from 'egg';
import elasticsearch from './src/impl/elasticsearch';

export default (app: Application) => {
  if (app.config.elasticsearch.app) elasticsearch(app);
};
