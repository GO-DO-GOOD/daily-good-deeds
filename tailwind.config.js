/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.ts',
    ],
  },
  theme: {
    extend: {
      colors: {
        circle: {
          1: '#b8b832',
          2: '#e75238',
          3: '#05a99a',
          4: '#b8b832',
          5: '#ffce23',
          6: '#f2a732',
          7: '#bdc336',
          8: '#869e52',
          9: '#376662',
          10: '#158d7f',
          11: '#6a7694',
          12: '#618ea7',
          13: '#866180',
          14: '#e5375a',
          15: '#e95094',
          16: '#866180',
        },
      },
      opacity: {
        10: '0.1',
        85: '0.85',
      },
    },
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'hover', 'disabled'],
    borderColor: ['dark', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  dark: 'class',
}
