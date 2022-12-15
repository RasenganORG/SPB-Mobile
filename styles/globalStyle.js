import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  colors: {
    main: {
      black: '#080000',
      white: '#FFFFFF',
      accent: '#F15A38',
      cappucino: '#EDCE8A',
      turquoise: '#50B2BD',
    },
    secondary: {
      cream: '#F2E3C6',
      lightGrey: '#999696',
      mediumGrey: '#2C2A2A',
      darkGrey: '#1C1A1A',
      nearBlack: '#131111'
    },
    indicators: {
      green: '#315634',
      orange: '#AE6D3D',
      red: '#9A362A',
      blue: '#2255EE'
    },
    buttonBackground: {
      orange: 'rgba(241, 90, 56, 0.2)',
      red: 'rgba(153, 17, 0, 0.4)',
      blue: 'rgba(0, 52, 153, 0.4)'
    }
  },
  spacing: {
    s: 10,
    m: 20,
    l: 30,
    xl: 55,
    xxl: 75
  },
  font: {
    size: {
      xs: 12,
      s: 14,
      m: 16,
      l: 20,
      xl: 32,
      xxl: 40,
      xxxl: 50
    },
    fontWeight: {
      xslim: '200',
      slim: '300',
      regular: '400',
      bold: '500',
      xbold: '700'
    }
  },
  test: 'daba'
})

const colors = globalStyles.colors
const spacing = globalStyles.spacing
const font = globalStyles.font

export { colors, spacing, font }
export default globalStyles