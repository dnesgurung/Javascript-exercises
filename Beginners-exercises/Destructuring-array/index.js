function gatherFeedback(feedbackArray) {
    // Your code goes here...
    let positiveTally = 0;
    let negativeTally = 0;
    let neutralTally = 0;
    for ( let i = 0; i < feedbackArray.length; i++){
        const [name, rating] = feedbackArray[i];
        if ( typeof rating !== 'number'){
            continue;
        } 
    if( rating >=7 && rating <=10 ) {
        positiveTally++;
        } else if (rating>= 4 && rating<=6){
         neutralTally++;
         } else if (rating>=0 && rating<=3){
                negativeTally++;
         }
    }
       return { 
        positive: positiveTally,
        negative: negativeTally,
        neutral: neutralTally
    }
}
