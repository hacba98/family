let config = {
  mongoURL:
    process.env.MONGO_URL || "mongodb://localhost:27017/family-services",
  port: 8000,
  secretWords: "Satoshi Nakamoto",
  tokenDuration: 60 * 60 * 24 * 30,
  passwordLength: 12
};

export default config;
