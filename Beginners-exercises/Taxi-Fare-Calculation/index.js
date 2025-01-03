function calculateTaxiFare(seconds) {
    
    
    // convert seconds to minute 

    const journeyInMinute = Math.ceil(seconds / 60);
    const baseFareInPence = 500;

    // Cost per additional minute after the first 3 minutes
    const additionalMinuteCostPence = 70;

    // Calculate total cost
    let totalCostPence;
    if (journeyInMinute <= 3) {
        totalCostPence = baseFareInPence;
    } else {
        const additionalMinutes = journeyInMinute - 3;
        totalCostPence = baseFareInPence + (additionalMinutes * additionalMinuteCostPence);
    }

    return totalCostPence;
}



    
    
