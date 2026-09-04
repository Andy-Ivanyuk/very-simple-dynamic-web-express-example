const listEl = document.querySelector("#article-list");

function truncate(text, maxLength) {
  const lines = text.split("\n").slice(0, 4).join("\n");
  if (lines === text && lines.length <= maxLength) return text;
  return `${lines.slice(0, maxLength).trimEnd()}…`;
}

function articleHTML(article) {
  const wrapper = document.createElement("a");
  wrapper.className = "article";
  wrapper.href = `article.html?id=${article.id}`;

  const title = document.createElement("h3");
  title.innerText = article.title;

  const text = document.createElement("p");
  text.className = "article__text";
  text.innerText = truncate(article.text, 240);

  wrapper.append(title, text);
  wrapper.dataset.id = article.id;

  return wrapper;
}

function showNotice(message) {
  const notice = document.createElement("p");
  notice.className = "notice";
  notice.textContent = message;
  listEl.replaceChildren(notice);
}

function render(articles) {
  if (articles.length === 0) {
    showNotice("No articles yet.");
    return;
  }

  listEl.replaceChildren(...articles.map(articleHTML));
}

async function load() {
  try {
    const articles = await API.getArticles();
    render(articles);
  } catch (error) {
    console.error(error);
    showNotice("Could not load the articles. Is the server running?");
  }
}

load();
