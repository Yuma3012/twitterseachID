const fs = require('fs')

//データを取りだす
const bufferData = fs.readFileSync('prefectureCityCode.json')

// データを文字列に変換
const dataJSON = bufferData.toString()

//JSONのデータをJavascriptのオブジェクトに
const data = JSON.parse(dataJSON)

