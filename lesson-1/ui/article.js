const detailEl = document.querySelector("#detail");
const commentListEl = document.querySelector("#comment-list");
const formEl = document.querySelector("#comment-form");
const commentStatusEl = document.querySelector("#comment-status");

function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return `${day}.${month}.${year}`;
}

function renderArticle(article) {
  document.title = article.title;

  const heading = document.createElement("h1");
  heading.textContent = article.title;

  const paragraph = document.createElement("p");
  paragraph.innerText = article.text;

  detailEl.replaceChildren(heading, paragraph);
}

function renderNotFound(message) {
  document.title = "Not found";

  const notice = document.createElement("p");
  notice.className = "notice";
  notice.innerText = message;
  detailEl.replaceChildren(notice);
}

function commentItem(comment) {
  const item = document.createElement("li");
  item.className = "comment";

  const meta = document.createElement("p");
  meta.className = "comment__meta";
  meta.innerText = `${comment.author} - ${formatDate(comment.createdAt.slice(0, 10))}`;

  const text = document.createElement("p");
  text.innerText = comment.text;

  item.append(meta, text);
  return item;
}

function renderComments(comments) {
  if (!comments.length) {
    commentListEl.innerText = "No comments yet. Be the first.";
    return;
  }

  commentListEl.replaceChildren(...comments.map(commentItem));
}

async function loadComments(id) {
  const comments = await API.getComments(id);
  renderComments(comments);
}

async function load(id) {
  try {
    const article = await API.getArticle(id);
    renderArticle(article);
    await loadComments(id);
  } catch (error) {
    console.error(error);
    renderNotFound(error.message);
  }
}

const params = new URLSearchParams(location.search);
const id = +params.get("id");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = formEl.querySelector("button");
  button.disabled = true;
  commentStatusEl.innerText = "";

  try {
    const res = await API.addComment(id, {
      author: formEl.author.value,
      text: formEl.text.value,
    });

    formEl.reset();

    commentListEl.appendChild(commentItem(res))
  } catch (error) {
    console.error(error);
    commentStatusEl.innerText = error.message;
  } finally {
    button.disabled = false;
  }
});

load(id);
