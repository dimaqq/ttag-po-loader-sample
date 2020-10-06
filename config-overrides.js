module.exports = (config, env) => {
  // 1. Tell webpack how to load PO files
  config.module.rules.push({
    test: [/\.po$/],
    loader: "ttag-po-loader",
  });

  // 2. Exempt PO files from default CRA rules
  const loaders = config.module.rules.find(r => r.oneOf).oneOf;
  loaders.find(l => l?.loader?.match(/file-loader/)).exclude.push(/[.]po$/);

  return config;
};
