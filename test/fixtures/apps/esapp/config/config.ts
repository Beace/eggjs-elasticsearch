import Mock from '@elastic/elasticsearch-mock';
const mock = new Mock();

// just for mock data
mock.add({
  method: 'GET',
  path: '/_cat/health',
}, () => {
  return { status: 'ok' };
});

export default {
  keys: 'keys',
  logger: {
    level: 'INFO',
  },
  elasticsearch: {
    // client: {
    //   node: 'http://127.0.0.1:9200',
    // },
    clients: {
      foo: {
        node: 'http://127.0.0.1:9200',
        // just for mock data
        Connection: mock.getConnection(),
      },
      bar: {
        node: 'http://127.0.0.1:9200',
        // just for mock data
        Connection: mock.getConnection(),
      },
    },
    agent: true,
  },
};