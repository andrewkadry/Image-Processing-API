import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test api endpoint response', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('Test images endpoint response', () => {
  it('gets the images endpoint', async () => {
    const response = await request.get(
      '/api/images?name=santamonica.jpg&width=200&height=200',
    );
    expect(response.status).toBe(200);
  });
});
