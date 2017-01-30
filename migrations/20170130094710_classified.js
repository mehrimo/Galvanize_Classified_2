'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable();
    table.string('item_image').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds');
};
