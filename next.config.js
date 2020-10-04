module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.ya?ml$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    return config;
  },
};
