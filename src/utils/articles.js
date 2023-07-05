const createItem = (article, templateElement) => {
  // Clone the template element
  const newItem = templateElement.cloneNode(true);

  // Query inner elements
  const image = newItem.querySelector('[data-element="image"]');
  const title = newItem.querySelector('[data-element="title"]');
  const role = newItem.querySelector('[data-element="role"]');
  const description = newItem.querySelector('[data-element="description"]');
  const contentType = newItem.querySelector('[data-element="content-type"]');
  const articleLink = newItem.querySelector('[data-element="article-link"]');

  // Populate inner elements
  if (image) image.src = article?.featuredImage?.url || '';
  if (title) title.textContent = article.title;
  if (role) role.textContent = article?._role?.role;
  if (description) description.textContent = article.articleDescription;
  if (contentType) {
    contentType.textContent = article.content_type;
    contentType.style.display = "none"
  }
  if (articleLink) {
    articleLink.href = `articles/common?id=${article.id}`;
  }

  return newItem;
};

export const showArticleList = async (listInstance, articles) => {
  // Save a copy of the template
  const [firstItem] = listInstance.items;
  const itemTemplateElement = firstItem.element;
  itemTemplateElement.style.opacity = 1;
  itemTemplateElement.style.transform = "";
  itemTemplateElement.style.transformStyle = "";

  // Remove existing items
  listInstance.clearItems();

  // Create the new items
  const newItems = articles.map((article) => createItem(article, itemTemplateElement));

  // Populate the list
  await listInstance.addItems(newItems);
}
