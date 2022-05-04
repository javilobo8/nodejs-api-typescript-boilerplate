import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface Config {
  port: number;
  mongo: {
    uri: string;
  };
  cors: {
    origin: string;
  };
}

const configName = 'nodejs-api-typescript-boilerplate';

let config: Config;

function getConfigFileName() {
  const baseConfig = path.join(__dirname, '../../config');

  switch (process.env.NODE_ENV) {
    case 'test': return path.join(baseConfig, 'config-test.yml');
    case 'production': return `/opt/config/${configName}-config.yml`;
    default:
  }

  return path.join(baseConfig, 'config.yml');
}

function loadConfig() {
  if (!config) {
    try {
      const file = fs.readFileSync(getConfigFileName(), 'utf-8');
      config = yaml.load(file) as Config;
      return config;
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
  return config;
}

export default loadConfig();

