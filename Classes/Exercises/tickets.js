function solve (arr, criteria) {


    function splitline (line) {  line.split('|');  }
    function converToTicket([destination, price, status]) { return new Ticket(destination, Number(price), status); }

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sortmapper = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price.price,
        'status': (a, b) => a.status.localeCompare(b.status),
    }

    return arr
    .map(splitline)
    .map(converToTicket)
    .sort(sortmapper[criteria])
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));