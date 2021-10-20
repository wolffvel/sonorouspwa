module.exports = {
  InjectManifest: (options) => {
    options.maximumFileSizeToCacheInBytes = 26214400;
    return options;
  },
};
