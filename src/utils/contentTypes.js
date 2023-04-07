import { createFilter } from './filter'

export const addContentTypeFilter = async (filtersInstance, data) => {
  // Get the template filter
  const filterTemplateElement = filtersInstance.form.querySelector('[data-element="filter-by-content-type"]');
  if (!filterTemplateElement) return;

  // Get the parent wrapper
  const filtersWrapper = filterTemplateElement.parentElement;
  if (!filtersWrapper) return;

  // Remove the template from the DOM
  filterTemplateElement.remove();

  // Create the new filters and append the to the parent wrapper
  for (const contentType of data) {
    const newFilter = createFilter({ label: contentType.ContentType, value: contentType.id }, filterTemplateElement);
    if (!newFilter) continue;

    filtersWrapper.append(newFilter);
  }
}
