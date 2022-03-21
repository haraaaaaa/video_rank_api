"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionCode = exports.maxResults = exports.chart = exports.part = exports.youtubeUrl = exports.appkey = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.appkey = process.env.APPKEY || '';
exports.youtubeUrl = process.env.YOUTUBE_URL || '';
exports.part = process.env.PART || 'spippet';
exports.chart = process.env.CHART || 'mostPopular';
exports.maxResults = process.env.MAX_RESULTS || '';
exports.regionCode = process.env.REGION_CODE || '';
