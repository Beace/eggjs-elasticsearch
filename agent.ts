import { Application } from 'egg';
import elasticsearch from './impl/elasticsearch';

export default (app: Application) => {
  if (app.config.elasticsearch.app) elasticsearch(app);
};
