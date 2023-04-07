import { fetchArticles } from '$xano/articles'
import { showArticleList } from './articles'
import { addRoleFilter } from './roles'
import { addContentTypeFilter } from './contentTypes'

// cmsFilter
export const cmsFilter = async (filtersInstances) => {
  // Get the filters instance
  const [filtersInstance] = filtersInstances;

  // Get the list instance
  const { listInstance } = filtersInstance;
  const { articles, roles, contentTypes } = await fetchArticles();

  await showArticleList(listInstance, articles)
  await addRoleFilter(filtersInstance, roles);
  await addContentTypeFilter(filtersInstance, contentTypes);

  // Sync the CMSFilters instance with the new created filters
  filtersInstance.storeFiltersData();
}

