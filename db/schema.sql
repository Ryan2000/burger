


CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

