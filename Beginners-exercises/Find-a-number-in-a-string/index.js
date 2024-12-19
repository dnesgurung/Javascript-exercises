
function findTicketPrices(emailString) {
    

    for ( let i = 0; i < emailString.length; i++){
      
         if (emailString[i] >= '0' && emailString[i] <= '9') {
            return true; // Return true if a number is found
        }
    }
    return false; // Return false if no numbers are found
    }
