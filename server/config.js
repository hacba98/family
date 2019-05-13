let config = {
  mongoURL:
    //process.env.MONGO_URL ||
    "mongodb://admin:admin2019@ds153556.mlab.com:53556/family-service",
  port: 8000,
  secretWords: "Satoshi Nakamoto",
  tokenDuration: 60 * 60 * 24 * 30,
  passwordLength: 12
};

export default config;
