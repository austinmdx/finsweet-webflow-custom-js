/* eslint-disable no-console */
import { getSiteId } from '@finsweet/ts-utils';

export const greetUser = () => {
  const siteId = getSiteId();

  console.log(`${siteId} is the Webflow site id`);
};
