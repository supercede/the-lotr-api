import express from 'express';
import logger from 'morgan';
import { config } from 'dotenv';
import movieRouter from './routes/movie.routes';
import charRouter from './routes/characters.routes';

config();

const app = express();

if (app.get('env') === 'development') {
  app.use(logger('dev'));
}

app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/character', charRouter);

//404 Page
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: `Can't find ${req.originalUrl} on this server`
  });
});

const port = process.env.NODE_ENV === 'test' ? 5272 : process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

export default app;
