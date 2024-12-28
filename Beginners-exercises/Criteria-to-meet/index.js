function isPartyViable(guests) {
    // Your code goes here...
    let total = 0;
    for ( let i = 0; i < guests.length; i++){
         
         total += guests[i].paidForTicket;
    }
    if (guests.length >= 5 && total >= 100){
     return true;
    } else {
     return false;
    }
    }
