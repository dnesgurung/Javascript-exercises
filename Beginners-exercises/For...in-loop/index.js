function orderSupplies(supplies, guests) {
    // Your code goes here...
    let totalSupplies = 0;
   for (const item in supplies) {
        
         totalSupplies += supplies[item];
    }
    
    
    return totalSupplies * guests;
    }
