module.exports = {
  InjectManifest: (options) => {
    options.maximumFileSizeToCacheInBytes = 25 * 1024 * 1024;
    return options;
  },
};
