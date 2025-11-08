/**
 * `log-x-forwarded-proto` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const xfproto = ctx.get('x-forwarded-proto');
    strapi.log.info(`[MIDDLEWARE] X-Forwarded-Proto: ${xfproto}, ctx.secure: ${ctx.secure}`);
    await next();
  };
};
