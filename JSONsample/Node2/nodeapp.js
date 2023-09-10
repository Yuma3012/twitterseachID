const fs = require('fs')
//ファイルを作成し、文字を書く
fs.writeFileSync('notes.txt', 'Hello, this is the first message!')
//ファイルを作成し、文字を追加する
fs.appendFileSync('notes.txt', 'Hello, this is the second message!')