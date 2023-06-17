import mm from 'egg-mock';
import request from 'supertest';

describe('test/es.test.ts', () => {
  describe('single client', () => {
    let app;
    before(async () => {

      app = mm.app({
        baseDir: 'apps/esapp',
      });
      await app.ready();
    });
    after(() => app.close());
    afterEach(mm.restore);

    it('should query', () => {
      return request(app.callback())
        .get('/')
        .expect(200)
        .expect(JSON.stringify({ status: 'ok' }));
    });
  });
});
