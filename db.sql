CREATE DATABASE pruebaitech_db;

USE pruebaitech_db;

CREATE TABLE usuarios(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(40) NOT NULL,
    n_control INT UNSIGNED NOT NULL,
    verificacion BOOLEAN NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE usuarios;