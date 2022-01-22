import supertest from 'supertest';
import app from '../index';
import resize from '../utilities/imageResize';

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

describe('resize an image function', () => {
  it('should return true if image resized', () => {
    expect(
      resize(
        './assets/full/fjord.jpg',
        300,
        200,
        './assets/thumb/fjord.jpg',
      ),
    ).toBeTruthy();
  });
});
