export const createFilter = ({ label, value }, templateElement) => {
  // Clone the template element
  const newFilter = templateElement.cloneNode(true);

  // Query inner elements
  const labelSpan = newFilter.querySelector('span');
  const radio = newFilter.querySelector('input');

  if (!labelSpan || !radio) return;

  // Populate inner elements
  labelSpan.textContent = label;
  radio.value = value;

  return newFilter;
};