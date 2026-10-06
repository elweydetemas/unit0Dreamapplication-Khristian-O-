// UNIT 0 APPLICATION OUTLINE
// Application: IT Support Request Tracker


// ------------------------------------------------------
// ORGANIZATION AND TIME MANAGEMENT
// Use Case:
// Break the application into smaller features such as:
// 1. Create a support ticket
// 2. Check ticket priority
// 3. Store tickets
// 4. Review unresolved tickets
// 5. Display all tickets
//
// This would make the application easier to build and test
// one section at a time.
// ------------------------------------------------------


// ------------------------------------------------------
// GROWTH MINDSET
// Use Case:
// Test each feature separately and use errors to determine
// what needs to be corrected.
//
// If a ticket does not display correctly:
// 1. Check the stored values.
// 2. Check the array indexes.
// 3. Check the logic.
// 4. Make a correction and test again.
// ------------------------------------------------------


// ------------------------------------------------------
// VALUES, DATA TYPES, AND OPERATIONS
// Skills:
// Variables, strings, numbers, booleans, comparison operators
//
// Use Case:
// Store the basic information for one support ticket.
// ------------------------------------------------------

// PSEUDOCODE:
// Create a string for the customer's name.
// Create a number for the ticket number.
// Create a string for priority.
// Create a boolean for resolution status.
// Log the information to test the values.

let customerName = "Jordan";
let ticketNumber = 1001;
let priority = "High";
let isResolved = false;

console.log(customerName);
console.log(ticketNumber);
console.log(priority);
console.log(isResolved);


// ------------------------------------------------------
// STRINGING CHARACTERS TOGETHER
// Skills:
// Strings and template literals using ${}
//
// Use Case:
// Combine separate ticket values into one readable message.
// ------------------------------------------------------

// PSEUDOCODE:
// Take the ticket number, customer name, and priority.
// Insert them into one formatted string.
// Log the completed ticket summary.

let ticketSummary =
    `Ticket ${ticketNumber}: ${customerName} has a ${priority} priority request.`;

console.log(ticketSummary);


// ------------------------------------------------------
// CONTROL STRUCTURES AND LOGIC
// Skills:
// if, else, ===, &&, and !
//
// Use Case:
// Decide whether a ticket needs immediate attention.
// ------------------------------------------------------

// PSEUDOCODE:
// IF priority equals "High"
// AND the ticket is NOT resolved,
// display an urgent message.
// OTHERWISE,
// place the ticket in the normal queue.

if (priority === "High" && !isResolved) {
    console.log("This ticket needs immediate attention.");
} else {
    console.log("This ticket can remain in the normal support queue.");
}


// ------------------------------------------------------
// BUILDING ARRAYS
// Skills:
// Array literals and multi-dimensional arrays
//
// Use Case:
// Store multiple support requests while keeping the
// information for each ticket grouped together.
// ------------------------------------------------------

// PSEUDOCODE:
// Create an outer array called supportRequests.
// Create an inner array for each ticket.
// Store:
// customer, device, issue, priority, resolved status.

let supportRequests = [
    ["Jordan", "Laptop", "Cannot connect to Wi-Fi", "High", false],
    ["Alex", "Printer", "Printer will not print", "Medium", true],
    ["Taylor", "Desktop", "Computer running slowly", "Low", false]
];

console.log(supportRequests);


// ------------------------------------------------------
// USING ARRAYS
// Skills:
// .length, bracket notation, and filter()
//
// Use Case:
// Count tickets, access specific ticket information,
// and create a list of unresolved requests.
// ------------------------------------------------------

// PSEUDOCODE:
// Use .length to count all support requests.
// Use [row][item] bracket notation to access one issue.
// Use filter() to keep tickets whose resolved value is false.

console.log("Number of tickets: " + supportRequests.length);

// First ticket, third value = issue
console.log(supportRequests[0][2]);

// Index 4 stores the resolved boolean.
let unresolvedRequests =
    supportRequests.filter(ticket => ticket[4] === false);

console.log(unresolvedRequests);


// ------------------------------------------------------
// WORKING WITH LOOPS
// Skills:
// for loop, index variable, .length, and i++
//
// Use Case:
// Move through every support request without writing
// a separate console.log() for every ticket.
// ------------------------------------------------------

// PSEUDOCODE:
// Start i at index 0.
// Continue while i is less than supportRequests.length.
// Display the current ticket.
// Increase i by 1.
// Stop when every ticket has been processed.

for (let i = 0; i < supportRequests.length; i++) {
    console.log(`Ticket ${i + 1}: ${supportRequests[i]}`);
}


// ------------------------------------------------------
// OVERALL APPLICATION FLOW
//
// Values and Data Types
//     Store information about a ticket.
//
// Stringing Characters Together
//     Turn ticket data into readable messages.
//
// Control Structures and Logic
//     Decide how the ticket should be handled.
//
// Building Arrays
//     Store multiple tickets together.
//
// Using Arrays
//     Count, access, and filter stored tickets.
//
// Working With Loops
//     Process all tickets without repeating code.
// ------------------------------------------------------

