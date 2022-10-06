'use strict';

/**
 * user-crud router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-crud.user-crud');
