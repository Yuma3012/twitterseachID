const fs = require('fs')

const person = {
    name: "Taro",
    age: 25
}

const personJSON = JSON.stringify(person)

fs.writeFileSync('info.json', personJSON)
