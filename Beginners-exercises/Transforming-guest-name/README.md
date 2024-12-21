 Create a function called makeGuestList that takes an objecti with a name property whose value will be a string consisting of a first and a last name, 
 separated by a space. The function should return an object.

 The function should remove the name property, replace it with firstName and lastName properties as shown in the examplese below.

 Examples

 makeGuestList({name: "Dinesh Gurung", age: 36});
 // should return {firstName: "Dinesh", lastName: "Gurung", age: 36}

 makeGuestList({name: "Rosani Thapa", age: 33});
 // should return {firstName: "Rosani", lastName: "Thapa", age: 33}
