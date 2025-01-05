function pickWinners(numbers) {
    // Your code goes here...
    const winner = [];

    for ( let i = 0; i < numbers.length; i++){
        const ticketCost = numbers[i];

        if ( i % 2 !== 0 && ticketCost % 2 !==0 ){
            winner.push({
                seat: i,
                ticketCost: ticketCost
            });
        }  
    }
    return winner;
}
