function calculateTables(guests, seats) {
    
    const tables = Math.round(guests / seats);
    const remainingGuests = guests % seats;

    return {tables, remainingGuests};
    }
