const comments = [
  {
    id: 1,
    articleId: 1,
    author: "Linus",
    text: "The view-source versus Elements comparison finally made this click for me.",
    createdAt: "2026-03-10T09:12:00.000Z",
  },
  {
    id: 2,
    articleId: 1,
    author: "Margaret",
    text: "Worth adding that the tree is also what a screen reader walks through.",
    createdAt: "2026-03-10T14:40:00.000Z",
  },
  {
    id: 3,
    articleId: 3,
    author: "Ken",
    text: "The textContent rule saved me once. Learn it before you need it.",
    createdAt: "2026-02-26T08:05:00.000Z",
  },
];

let nextId = 4;

function findByArticleId(articleId) {
  return comments.filter((comment) => comment.articleId === articleId);
}

function insert(comment) {
  const saved = { id: nextId, ...comment };
  nextId += 1;
  comments.push(saved);
  return saved;
}

module.exports = { findByArticleId, insert };
