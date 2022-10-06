'use strict';

/**
 * user-crud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-crud.user-crud');
