exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", actions => {
    actions.increments();

    actions.text("description").notNullable();
    actions.text("notes").notNullable();
    actions.boolean("completed").defaultTo(false);

    actions
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
