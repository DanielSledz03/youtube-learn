module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@navigation": "./src/navigation",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./assets/",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@types": "./src/types",
            "@store": "./src/store",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
        },
      ],
    ],
  };
};
