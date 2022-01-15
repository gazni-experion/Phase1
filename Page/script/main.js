"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Global variable for interface
const validationObj = {};
function Required(target, name) {
    console.log(target);
    const className = target.constructor.name;
    validationObj[className] = Object.assign(Object.assign({}, validationObj[className]), { [name]: ['required'] });
    console.log(validationObj);
}
function Positive(target, name) {
    console.log(target);
    const className = target.constructor.name;
    validationObj[className] = Object.assign(Object.assign({}, validationObj[className]), { [name]: ['positive'] });
    console.log(validationObj);
}
function validate(obj) {
    let validatorName = validationObj[obj.constructor.name];
    console.log(validatorName);
    if (!validatorName) {
        return;
    }
    let isValid = true;
    for (const prop in validatorName) {
        console.log(prop);
        for (const validator of validatorName[prop]) {
            console.log(validator);
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Ticket {
    constructor(_name, _departure, _destination, _airline, _date, _tickets, _cost) {
        this.name = _name;
        this.departure = _departure;
        this.destination = _destination;
        this.airline = _airline;
        this.date = _date;
        this.tickets = _tickets;
        this.cost = _cost;
    }
}
__decorate([
    Required
], Ticket.prototype, "name", void 0);
__decorate([
    Required
], Ticket.prototype, "departure", void 0);
__decorate([
    Required
], Ticket.prototype, "destination", void 0);
__decorate([
    Required
], Ticket.prototype, "airline", void 0);
__decorate([
    Required
], Ticket.prototype, "date", void 0);
__decorate([
    Positive
], Ticket.prototype, "tickets", void 0);
__decorate([
    Positive
], Ticket.prototype, "cost", void 0);
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const _name = document.getElementById('name');
    const _departure = document.getElementById('departure');
    const _destination = document.getElementById('destination');
    const _airline = document.getElementById('airline');
    const _date = document.getElementById('date');
    const _tickets = document.getElementById('tickets');
    const _cost = document.getElementById('cost');
    const name = _name.value;
    const departure = _departure.value;
    const destination = _destination.value;
    const airline = _airline.value;
    const date = _date.value;
    const tickets = +_tickets.value;
    const cost = +_cost.value;
    const courseObj = new Ticket(name, departure, destination, airline, date, tickets, cost);
    if (!validate(courseObj)) {
        alert("Input values are not valid");
        return;
    }
    console.log(courseObj);
});
