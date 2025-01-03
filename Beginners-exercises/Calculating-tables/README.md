The number of guests may not divide evenly by the number of seats, so we will have to add some extra chairs to a few of the tables for them.

The function calculateTables takes two arguments, the number of guests and the number of seats around a table.

It should return an object with two properties: a key of tables with the value of the number tables, and a key of remainingGuests with a value of the number of guests without a seat who will need to be added to one of the other tables.

Examples Below.

calculateTables(4, 2);
// should return { tables: 2 , remainingGuests: 0 }

calculateTables(14, 6);
// should return { tables: 2 , remainingGuests: 2 }

calculateTables(26, 5);
// should return { tables: 5 , remainingGuests: 1 }
