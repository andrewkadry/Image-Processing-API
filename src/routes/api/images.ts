import express from 'express';
import resize from '../../utilities/imageResize';
import fs from 'fs';
import path from 'path';
const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response) => {
    const originalPath =
      './assets/full/' + (req.query.name as string);
    const thumbPath =
      (((('./assets/thumb/' + req.query.width) as string) +
        req.query.height) as string) + (req.query.name as string);
    if (
      isNaN(Number(req.query.width as string)) ||
      isNaN(Number(req.query.height as string))
    ) {
      res.send('height and width should be numbers!');
    } else if (fs.existsSync(thumbPath)) {
      res.sendFile(thumbPath, {
        root: path.join(__dirname, '../../..'),
      });
    } else {
      await resize(
        originalPath,
        Number(req.query.width as string),
        Number(req.query.height as string),
        thumbPath,
      );
      res.sendFile(thumbPath, {
        root: path.join(__dirname, '../../..'),
      });
    }
  },
);

export default images;
