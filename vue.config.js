const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer("css").tap(([options] = [{}]) => {
        const next = options || {};
        next.minimizerOptions = next.minimizerOptions || {};
        next.minimizerOptions.preset = [
          "default",
          {
            mergeRules: false,
          },
        ];
        return [next];
      });
    }
  },
});
