/* eslint-disable import/no-extraneous-dependencies */
const NodeEnvironment = require('jest-environment-node');
const { MongoMemoryServer } = require('mongodb-memory-server');

class MongoDbEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    this.mongod = await MongoMemoryServer.create({ debug: false });

    this.global.__MONGO_URI__ = await this.mongod.getUri();
    this.global.__COUNTERS__ = {
      user: 0,
    };
  }

  async teardown() {
    await super.teardown();

    if (this.mongod) {
      await this.mongod.stop();
    }
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = MongoDbEnvironment;