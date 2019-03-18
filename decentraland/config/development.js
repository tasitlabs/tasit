module.exports = {
  provider: {
    network: "other",
    provider: "jsonrpc",
    pollingInterval: 1000,
    jsonRpc: {
      url: "http://localhost",
      port: 8545,
    },
  },
  events: {
    timeout: 2000,
  },
};
