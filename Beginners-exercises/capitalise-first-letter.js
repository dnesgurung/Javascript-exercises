function greetGuest(name) {

    if ( name === ''){
        return `Hello !`
    } else {
   let capitalise = String(name[0]).toUpperCase() + String(name).slice(1);
    return `Hello ${capitalise}!`;
    }
    }
