async function fetchJSON(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;

    try {
      const body = await response.json();
      if (body.error) {
        message = body.error;
      }
    } catch {}

    throw new Error(message);
  }

  return response.json();
}

const API = {
  getArticles() {
    return fetchJSON("/api/articles");
  },

  getArticle(id) {
    return fetchJSON(`/api/articles/${id}`);
  },

  getComments(id) {
    return fetchJSON(`/api/articles/${id}/comments`);
  },

  addComment(id, comment) {
    return fetchJSON(`/api/articles/${id}/comments`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(comment),
    });
  },
};
