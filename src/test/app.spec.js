import { expect } from 'chai';
import request from 'supertest';
import app from '../app';

describe('404 error', () => {
  it('should show a 404 error, with prepared message if page does not exist', done => {
    request(app)
      .get('/quotes')
      .end((err, res) => {
        expect(res.status).to.eql(404);
        expect(res.body.message).to.eql(`Can't find /quotes on this server`);
        done(err);
      });
  });
});
