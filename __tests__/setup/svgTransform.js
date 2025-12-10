module.exports = {
  process() {
    return {
      code: `module.exports = function() { return null; }; module.exports.default = function() { return null; };`,
    };
  },
  getCacheKey() {
    return "svgTransform";
  },
};
