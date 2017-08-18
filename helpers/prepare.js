const fs = require('fs')
const obj = JSON.parse(fs.readFileSync('package.json', 'utf8'))

obj.main = './lib/main.js'

fs.writeFileSync('package.json', JSON.stringify(obj, null, 2), 'utf8')
