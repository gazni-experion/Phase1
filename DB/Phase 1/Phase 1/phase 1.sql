--Create database Travel_Booking
use Travel_Booking

create table Travellers(
	personId INT PRIMARY KEY not null,
	name CHAR(20),
	tickets SMALLINT
)


create table Travels(
	travelId INT PRIMARY KEY not null,
	placeOfDeparture CHAR(20),
	destination CHAR(20),
	dateOfTravel DATE,
	timeoftravel TIME(0)
)

create table Airlines(
	AirlineId INT PRIMARY KEY not null,
	AirlineName CHAR(20)
)

create table Charges(
	chargetId INT PRIMARY KEY not null,
	pricePerTicket INT,
	handlingCharges INT,
	extraBaggageCharges INT
)


--1. Display the list of Passengers name, date of travel, place of departure, destination, Airline , time of travel , 
--no. of tickets (passengers)and price of ticket per person who are going to "Delhi" 
--2. Display the list of Passengers and the date of journey who are traveling on next 2 days 
--3. Display the list of Passengers who have booked more than one ticket for a travel. 
