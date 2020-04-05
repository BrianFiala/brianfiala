const cities = require('../assets/city.list.json')
const fs = require('fs')
const path = require('path')

const usaCities = cities.filter(city => city.country.toUpperCase() === 'US')
fs.writeFileSync(path.join(__dirname + '/../assets/usa.city.list.json'), JSON.stringify(usaCities))