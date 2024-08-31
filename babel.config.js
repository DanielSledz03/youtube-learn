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
          root: ["./"], // Określa podstawowy katalog projektu
          alias: {
            "@navigation": "./src/navigation",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@stores": "./src/stores",
            "@assets": "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"], // Umożliwia rozpoznawanie plików z tymi rozszerzeniami
        },
      ],
    ],
  };
};
