// URLに応じて分岐させるモジュール

'use strict';
const postHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  if (process.env.RENDER && req.headers['x-forwarded-proto'] === 'http') {
    util.handleNotFound(req, res);
  }
  switch (req.url) {
    case '/posts':
      postHandler.handle(req, res);
      break;
    case '/posts/delete':
      postHandler.handleDelete(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res);
      break;
    case '/style.css':
      util.handleStyleCssFile(req, res);
      break;
    case '/nn-chat.js':
      util.handleNnChatJsFile(req, res);
      break;
    case '/changeTheme':
      util.handleChangeTheme(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};
