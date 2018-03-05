-- Inside your burger directory, create a folder named db.

-- In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:

-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean. 
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);