BEGIN;

DROP TABLE IF EXISTS dogs, spots, parks CASCADE;

CREATE TABLE dogs (
    id SERIAL PRIMARY KEY,
    dog_name VARCHAR(100) NOT NULL,
    dog_breed VARCHAR(100) NOT NULL
);

INSERT INTO dogs (dog_name, dog_breed) VALUES ('Mackerel', 'Beagle'), ('Fenton', 'Labrador'), ('Spot', 'Beagle');

CREATE TABLE parks (
    id SERIAL PRIMARY KEY,
    park_name VARCHAR(100) NOT NULL,
    lat FLOAT NOT NULL,
    lon FLOAT NOT NULL
);

INSERT INTO parks (park_name, lat, lon) VALUES 
('Brockwell Park', 51.450706, -0.1086375),
('Finsbury Park', 51.5632951, -0.1161898),
('Greenwich Park', 51.4769095, -0.0007244),
('Hampstead Heath', 51.5608421, -0.1653263),
('Richmond Park', 51.4469992, -0.2867548),
('Victoria Park', 51.5365614, -0.0411607);

CREATE TABLE spots (
    id SERIAL PRIMARY KEY,
    dog_id INTEGER REFERENCES dogs(id),
    park_id INTEGER REFERENCES parks(id)
);

INSERT INTO spots (dog_id, park_id) VALUES (2, 5), (1, 6), (1, 2), (3, 4);

COMMIT;