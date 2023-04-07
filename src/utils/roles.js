import { createFilter } from './filter'

export const addRoleFilter = async (filtersInstance, roles) => {
  // Get the template filter
  const filterTemplateElement = filtersInstance.form.querySelector('[data-element="filter-by-role"]');
  if (!filterTemplateElement) return;

  // Get the parent wrapper
  const filtersWrapper = filterTemplateElement.parentElement;
  if (!filtersWrapper) return;

  // Remove the template from the DOM
  filterTemplateElement.remove();

  // Create the new filters and append the to the parent wrapper
  for (const role of roles) {
    const newFilter = createFilter({ label: role.role, value: role.id }, filterTemplateElement);
    if (!newFilter) continue;

    filtersWrapper.append(newFilter);
  }
}
