-- query to create database
CREATE TABLE guestbook (  
    --the id represents each entry uniquely (=unique identifier)
    -- SQL id values are UNIQUE; meaning if a row is deleted, that id is gone forever
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  date DATE,
  name VARCHAR(255),
  location VARCHAR(255),
  comment TEXT,
  rating INT,
  initals TEXT
);