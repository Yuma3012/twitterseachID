const fs = require('fs');
const http = require('http');

// ファイルからJSONデータを読み取ります
let jsonData;
try {
  jsonData = fs.readFileSync('prefectureCityCode.json', 'utf8');
} catch (error) {
  console.error('JSONファイルの読み込みエラー:', error);
  process.exit(1); // エラーが発生した場合、サーバープロセスを終了します
}

// HTTPサーバーを作成します
const server = http.createServer((req, res) => {
  // リクエスト時にHTMLページを提供します
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = fs.readFileSync('index.html', 'utf8');
    res.end(html);
  }

  // リクエスト時にJSONデータを提供します
  if (req.url === '/getJsonData') {
    try{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(jsonData);
    } catch (error) {
        console.error('JSONファイルのリクエストエラー:', error);
        process.exit(1); // エラーが発生した場合、サーバープロセスを終了します
    }
  }
});

// 特定のポートでリスニングします
const port = 3000;
server.listen(port, () => {
  console.log(`サーバーがポート${port}で実行されています`);
});
