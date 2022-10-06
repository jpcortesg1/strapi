'use strict';

/**
 * user-crud controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-crud.user-crud');
