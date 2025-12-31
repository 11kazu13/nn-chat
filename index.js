// HTTPサーバーを起動する

'use strict';
const http = require('node:http');

const server = http.createServer((req, res) => {
  res.end("hi");
})
.on('error', (e) => {
  console.error('Server Error', e);
})
.on('clientError', (e) => {
  console.error('Client Error', e);
});

const port = 8000;
server.listen(port, () => {
  console.info(`${port}番ポートで起動中...`);
});