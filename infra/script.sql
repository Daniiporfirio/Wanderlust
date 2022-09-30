DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS cities;

CREATE TABLE countries(
	IDCountry INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE cities(
	IDCity INTEGER PRIMARY KEY AUTOINCREMENT,
	IDCountry INTEGER NOT NULL,
	name TEXT NOT NULL,
    image TEXT NOT NULL
);


INSERT INTO countries (name, image) VALUES ('Brasil','brasil.jpg');
INSERT INTO countries (name, image) VALUES ('Chile','chile.jpg');
INSERT INTO countries (name, image) VALUES ('Estados Unidos','estadosunidos.jpg');
INSERT INTO countries (name, image) VALUES ('Canadá','canada.jpg');
INSERT INTO countries (name, image) VALUES ('Espanha','espanha.jpg');
INSERT INTO countries (name, image) VALUES ('Portugal','portugal.jpg');
INSERT INTO countries (name, image) VALUES ('Argentina','argentina.jpg');
INSERT INTO countries (name, image) VALUES ('Bélgica','belgica.jpg');
INSERT INTO countries (name, image) VALUES ('Egito','egito.jpg');

INSERT INTO cities (IDCountry, name, image) VALUES (1,'Brasília','brasilia.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (1,'Salvador','salvador.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (2,'Santiago','santiago.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (2,'Púcon','pucon.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (3,'Miami','miami.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (3,'New York','newyork.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (4,'Toronto','toronto.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (4,'Vancouver','vancouver.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (5,'Madri','madri.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (5,'Barcelona','barcelona.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (6,'Lisboa','lisboa.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (6,'Porto','porto.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (7,'Buenos Aires','buenosaires.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (7,'Bariloche','bariloche.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (8,'Bruxelas','bruxelas.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (8,'Bruges','bruges.jpg');
INSERT INTO cities (IDCountry, name, image) VALUES (9,'El Cairo','elcairo.jpg');

SELECT * FROM countries;
SELECT * FROM cities;