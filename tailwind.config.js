const production = !process.env.ROLLUP_WATCH;
console.trace('read tailwind config')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
      "./public/**/*.html",
      "./public/**/*.css",
    ], 
    enabled: production // disable purge in dev
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
