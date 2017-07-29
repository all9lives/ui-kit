/* Fix old version react-native warning */
const filterWarning = [
  'Warning: Accessing createClass via the main React package is deprecated',
  'Warning: Accessing PropTypes via the main React package is deprecated'
]

const orgWarn = console.warn

console.warn = (message) => {
  if (filterWarning.every(warning => message.indexOf(warning) === -1)) {
    orgWarn(message)
  }
}
/* Fix old version react-native warning */
