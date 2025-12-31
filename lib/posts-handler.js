// /postsのハンドリングを実装

'use strict';

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.end('hi');
      break;
    case 'POST':
      // TODO POSTの処理
      break;
    default:
      break;
  }
}

// 他のファイルからも関数を使えるようにする
module.exports = {
  handle
};