
interface validationConfig{

    
    [property:string] : {
        [validationProperty: string]: string[];
    };

}

//Global variable for interface
const validationObj: validationConfig = {}

function Required(target: any, name: string){      
    console.log(target)
    const className = target.constructor.name;
    validationObj[className] = {
        ...validationObj[className],[name]:['required'],    
    }

    console.log(validationObj);
}

function Positive(target: any, name: string){       
    console.log(target)
    const className = target.constructor.name;
    validationObj[className] = {
        ...validationObj[className],[name]:['positive'],    
    }

    console.log(validationObj);
}


function validate(obj:any){
    let validatorName = validationObj[obj.constructor.name];
    console.log(validatorName)

    if(!validatorName){
        return;
    }

    let isValid = true;

    for(const prop in validatorName){
        console.log(prop);
        for(const validator of validatorName[prop]){
            console.log(validator);

            switch(validator){
                case 'required':
                    isValid = isValid && !! obj[prop];
                    break;
                case 'positive':
                    isValid = obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}



class Ticket{
    @Required
    name: string;
    @Required
    departure: string;
    @Required
    destination: string;
    @Required
    airline: string;
    @Required
    date: string;
    

    @Positive
    tickets: number;
    @Positive
    cost: number;
    constructor(_name:string,_departure:string,_destination:string,
        _airline:string,_date:string, _tickets: number,_cost: number){
        this.name = _name;
        this.departure = _departure;
        this.destination = _destination;
        this.airline = _airline;
        this.date = _date;
        this.tickets = _tickets;
        this.cost = _cost;
    } 
}
const form = document.querySelector('form')!;
form.addEventListener('submit',event =>{

    event.preventDefault();
    const _name = document.getElementById('name') as HTMLInputElement
    const _departure = document.getElementById('departure') as HTMLInputElement
    const _destination = document.getElementById('destination') as HTMLInputElement
    const _airline = document.getElementById('airline') as HTMLInputElement
    const _date = document.getElementById('date') as HTMLInputElement
    const _tickets = document.getElementById('tickets') as HTMLInputElement
    const _cost = document.getElementById('cost') as HTMLInputElement

    const name = _name.value;
    const departure = _departure.value;
    const destination = _destination.value;
    const airline = _airline.value;
    const date= _date.value;
    const tickets = +_tickets.value;
    const cost = +_cost.value;

    const courseObj = new Ticket(name,departure,destination,airline,date,
        tickets,cost);

    if(!validate(courseObj)){
        alert("Input values are not valid")
        return;
    }



    console.log(courseObj);
})