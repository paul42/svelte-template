const production = !process.env.ROLLUP_WATCH;
console.log('read tailwind config')
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
      // may also want to include base index.html
    ], 
    enabled: production // disable purge in dev
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
