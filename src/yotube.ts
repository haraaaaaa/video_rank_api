import request from 'request';
import * as youtube from "./config/env_youtube";
import { logger } from './log/winston';

const params = { 
    part: youtube.part,
    maxResults: youtube.maxResults,
    chart: youtube.chart, 
    regionCode: youtube.regionCode,
    key: youtube.appkey,
};

export function getMostPopular (): Promise<string> {
    return new Promise(function (resolve, reject) {
        request.get({uri: youtube.youtubeUrl, qs: params}, (err, res) => {
            logger.info('[ACCESS] getMostPopular');
            if (err) { 
                logger.error('[ACCESS] getMostPopular' + err);
                reject(err);
            }
            logger.info('[ACCESS] getMostPopular');
            const result:string = JSON.stringify(res.body);
            resolve(result);
        })
})};
