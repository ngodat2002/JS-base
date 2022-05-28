import {company,getCompany} from './modules.js'
import {company as x, getCompany as y} from './modules.js'
import * as myCompany from './modules.js'
import c from './modules.js'
console.log(company)
console.log(getCompany())

console.log(x)
console.log(y())

console.log(myCompany.getCompany())
console.log(myCompany.company)

console.log(c.getName())
c.setName('Google Inc')
console.log(c.getName())