// Write your solution in this file!
let employee = {
    name: "Peter Wainaina",
    streetAddress: "707 Main St"
  };
  
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modifies the employee object
    return employee; // Returns the updated object
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; // Create a shallow copy
    delete newEmployee[key]; // Remove the specified key from the copy
    return newEmployee; // Return the updated copy
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutates the original object
    return employee; // Returns the modified object
}

