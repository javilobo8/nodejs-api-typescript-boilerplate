import cors from 'cors';
import config from '../config';

export default cors({
  origin: config.cors.origin,
  credentials: true,
});