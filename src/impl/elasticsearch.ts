import { Client } from '@elastic/elasticsearch';
import { Application } from 'egg';
import assert from 'assert';

export default app => {
  app.addSingleton('elasticsearch', createClient);
};

export function createClient(config, app: Application) {
  assert(config.node, "elasticsearch config node is required");
  const ESClient = app.config.elasticsearch.ElasticSearch || Client;
  const client = new ESClient(config);
  return client;
}