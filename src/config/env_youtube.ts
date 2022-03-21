import dotenv from "dotenv";
dotenv.config();

export const appkey = process.env.APPKEY || '';
export const youtubeUrl = process.env.YOUTUBE_URL || '';
export const part = process.env.PART || 'spippet';
export const chart = process.env.CHART || 'mostPopular';
export const maxResults = process.env.MAX_RESULTS || '';
export const regionCode = process.env.REGION_CODE || '';
    