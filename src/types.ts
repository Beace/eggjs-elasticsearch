import { Client, ClientOptions } from "@elastic/elasticsearch";

export interface EggElasticSearchOptions {
  ElasticSearch?: Client;
  default?: object;
  app?: boolean;
  agent?: boolean;
  client?: ClientOptions;
  clients?: Record<string, ClientOptions>;
}

declare module 'egg' {
  interface Application {
    elasticsearch: Client & Singleton<Client>;
  }

  interface EggAppConfig {
    elasticsearch: EggElasticSearchOptions;
  }
}
