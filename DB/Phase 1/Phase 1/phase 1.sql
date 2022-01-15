--Create database Travel_Booking
use Travel_Booking
GO

create table Travellers(
	personId INT PRIMARY KEY not null IDENTITY,
	name CHAR(50) NOT NULL
)


create table Airlines(
	AirlineId INT PRIMARY KEY not null IDENTITY,
	AirlineName CHAR(50),
	pricePerTicket INT,
	handlingCharges INT,
	extraBaggageCharges INT
)

create table Travels(
	travelId INT PRIMARY KEY not null IDENTITY,
	ticketNos SMALLINT,
	placeOfDeparture CHAR(50),
	destination CHAR(50),
	dateOfTravel DATE,
	timeoftravel TIME(0),
	AirlineId INT FOREIGN KEY REFERENCES Airlines(AirlineId),
	personId INT FOREIGN KEY REFERENCES Travellers(personId),
)

INSERT INTO Travellers VALUES
	('Sanjay'),
	('Deepak'),
	('Varun'),
	('Shekar'),
	('Sakkeer')


INSERT INTO Airlines VALUES
	('Jet airways', 5000, 1000, 1000),
	('Ethihad airways', 4000, 1000, 500),
	('Indigo airways', 3000, 800, 500)


INSERT INTO Travels VALUES
	(3,'TVM', 'Delhi', '2022-01-16', '10:11:43',1,1),
	(1,'TVM', 'Delhi', '2022-01-16', '10:11:43',1,2),
	(4,'TVM', 'Delhi', '2022-01-16', '10:11:43',1,3),
	(1,'TVM', 'Hyderabad', '2022-01-16', '1:14:30',2,4),
	(2,'TVM', 'Mumbai', '2022-01-17', '21:05:10',2,5),
	(1,'TVM', 'Kolkata', '2022-01-18', '11:31:00',1,2)




--1. Display the list of Passengers name, date of travel, place of departure, destination, Airline , time of travel , 
--no. of tickets (passengers)and price of ticket per person who are going to "Delhi" 

SELECT name, dateOfTravel, placeOfDeparture, destination, AirlineName, timeoftravel, ticketNos, pricePerTicket FROM Travels
JOIN Travellers ON Travellers.personId = Travels.personId
JOIN Airlines ON Airlines.AirlineId = Travels.AirlineId
WHERE destination = 'Delhi'

--2. Display the list of Passengers and the date of journey who are traveling on next 2 days 

SELECT name, dateOfTravel, placeOfDeparture, destination, AirlineName, timeoftravel, ticketNos, pricePerTicket FROM Travels
JOIN Travellers ON Travellers.personId = Travels.personId
JOIN Airlines ON Airlines.AirlineId = Travels.AirlineId
WHERE dateOfTravel > '2022-01-16' AND dateOfTravel < '2022-01-19'

--3. Display the list of Passengers who have booked more than one ticket for a travel.

SELECT name, dateOfTravel, placeOfDeparture, destination, AirlineName, timeoftravel, ticketNos, pricePerTicket FROM Travels
JOIN Travellers ON Travellers.personId = Travels.personId
JOIN Airlines ON Airlines.AirlineId = Travels.AirlineId
WHERE ticketNos > 1

SELECT * FROM Travels
SELECT * FROM Travellers
SELECT * FROM Airlines


