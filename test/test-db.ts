const mongooseOpts = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export default (mongoose: any) => {
  async function connect() {
    await mongoose.connect(global.__MONGO_URI__, mongooseOpts);
  }

  async function disconnect() {
    await mongoose.disconnect();
  }

  return {
    connect,
    disconnect,
  };
};