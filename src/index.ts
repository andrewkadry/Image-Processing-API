import express from 'express';
import routes from './routes/index';
const app = express();

app.use('/api', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
