import { fetchArticleById } from '$xano/articles'
import { getUrlQueries } from '$utils/common'

$(document).ready(async () => {
  const queries = getUrlQueries();
  const articleId = queries['id'];
  const articleData = await fetchArticleById(articleId);
  const titleElements = $('[data-element="article-title"]');
  const descriptionElement = $('[data-element="article-description"]')[0];
  const contentElement = $('[data-element="article-content"]')[0];

  if (titleElements.length) {
    titleElements.each((idx, element) => {
      element.innerHTML = articleData.title;
    });
  }
  if (contentElement) {
    contentElement.innerHTML = articleData.articleContent;
  }
  if (descriptionElement) {
    descriptionElement.innerHTML = articleData.articleDescription;
  }
})