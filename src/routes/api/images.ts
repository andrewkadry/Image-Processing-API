import express from 'express';
import sharp from 'sharp';
import path from 'path';
const images = express.Router();

images.get('/', async (req, res) => {
  try {
    await sharp('./assets/full/' + (req.query.name as string))
      .resize({
        width: Number(req.query.width as string),
        height: Number(req.query.height as string),
        fit: 'contain',
      })
      .toFile('./assets/thumb/' + (req.query.name as string));
  } catch (error) {
    console.log(error);
    res.statusCode = 400;
    console.log(res.statusCode);
    res.send('error: the requested image cannot be found!');
  }

  res.sendFile('/assets/thumb/' + req.query.name, {
    root: path.join(__dirname, '../../..'),
  });
});

export default images;
