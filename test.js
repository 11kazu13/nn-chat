'use strict';
const pug = require('pug');
const assert = require('node:assert');

const html = pug.renderFile('./views/posts.pug', {
  posts: [
    {
      id: 1,
      content: "<script>alert('test');</script>",
      postedBy: 'guest1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  user: 'guest1',
});

// scriptタグが「文字として」出力されている（=エスケープされている）ことを確認
assert(html.includes("&lt;script&gt;alert('test');&lt;/script&gt;"));

console.log('テストが正常に完了しました');
