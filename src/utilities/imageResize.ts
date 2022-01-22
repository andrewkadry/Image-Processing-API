import sharp from 'sharp';

async function resize(
  imageDir: string,
  width: number,
  height: number,
  saveDir: string,
) {
  try {
    await sharp(imageDir)
      .resize({
        width: width,
        height: height,
      })
      .toFile(saveDir);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default resize;
