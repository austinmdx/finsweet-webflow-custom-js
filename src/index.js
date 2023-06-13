import { cmsFilter } from "$utils/cmsfilter";
import { greetUser } from '$utils/test';

window.Webflow ||= [];
window.Webflow.push(greetUser);

window.fsAttributes = window.fsAttributes || [];

window.fsAttributes.push([
  'cmsfilter',
  cmsFilter
])

window.fsAttributes.push([
  'cmsload',
  (listInstances) => {
    console.log('cmsload Successfully loaded!');

    // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
    const [listInstance] = listInstances;

    // The `renderitems` event runs whenever the list renders items after switching pages.
    listInstance.on('renderitems', (renderedItems) => {
      console.log('RenderedItem:', renderedItems);
    });
  },
]);