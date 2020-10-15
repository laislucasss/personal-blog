module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#FDDE06",
        "black-primary": "#050103",
        "blue-primary": "#0300AD",
        "red-primary": "#E70503",
        "gray-primary": "#EAEFE9",
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
