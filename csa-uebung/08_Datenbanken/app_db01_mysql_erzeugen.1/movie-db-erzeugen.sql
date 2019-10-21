CREATE DATABASE `movie-db-<user>`;
USE `movie-db-<user>`;
CREATE TABLE `Movies`(
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`title` varchar(255) DEAFULT NULL,
	`year` int(11) DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `Movies`(`title`), `year`) VALUES
('Odyssee im Weltraum', 1968),
('HIghlander - Es kann nur einen geben', 1986),
('Per Anhalter durch die Galaxis', 2005);
