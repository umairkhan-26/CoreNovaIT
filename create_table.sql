-- Run this once in phpMyAdmin (under Databases in your EasyHost panel)
-- to create the table that will store contact form submissions.

CREATE TABLE contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  submitted_at DATETIME NOT NULL
);
