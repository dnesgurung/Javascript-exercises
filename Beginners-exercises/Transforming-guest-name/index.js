function makeGuestList(person) {
    // Splitting the name into firsName and lastName

    const newName = person.name.split(" ");

    const firstName = newName[0];
    const lastName = newName[1];

    // Creating a new object with the firstName and lastnName at the beginning 

    const newPerson = {
        firstName: firstName,
        lastName: lastName,
        ... person
    };

    delete newPerson.name;

    return newPerson;
    

    }
