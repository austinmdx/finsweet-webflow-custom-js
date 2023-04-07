import { cmsFilter } from "$utils/cmsfilter";
import { greetUser } from '$utils/test';

window.Webflow ||= [];
window.Webflow.push(greetUser);

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsfilter',
  cmsFilter
])
