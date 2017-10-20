const fs = require('fs')
const path = require('path')
const components = require('./src/components')
const theme = require('./src/theme')

const json = JSON.stringify({
  name: 'Rebass',
  library: 'styled-components',
  components
})

const filename = path.join(__dirname, 'lab.json')

fs.writeFileSync(filename, json)
fs.writeFileSync(path.join(__dirname, 'theme.json'), JSON.stringify(theme))
