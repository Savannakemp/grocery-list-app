DROP TABLE IF EXISTS test_table;

CREATE TABLE IF NOT EXISTS test_table (
  id SERIAL PRIMARY KEY,
  list_item TEXT NOT NULL
);

INSERT INTO test_table
    (list_item)
VALUES
    ('Eggs'), ('Milk'), ('Bread')
;