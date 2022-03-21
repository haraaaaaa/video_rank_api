import express from 'express';
import { getMostPopular } from './yotube';
import { logger } from './log/winston';

const app = express();

app.get('/mostPopular', async (req, res) => {
    logger.info('GET /mostPopular');
    const result:string = await getMostPopular();
    res.send(result);
  });

app.listen(8080, () => {
    logger.info('api server started!');
  });