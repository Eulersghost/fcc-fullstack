/* Looks like this one is going to have me build a function that iterates through an array to find the right property based on the following assignments:

1. Create a function named lookUpProfile with arguments 'name' and 'property' as arguments
2. Retrieve contact information from the contacts array 
3. If function receives a contact name and the property does exist in the array return the property value
4. If name passed doesn't exist in the contacts array return "No such contact"
5. If the property doesn't exist on a searched and found contact return "No such property"
*/

/* My Pseudocode:

1. define function lookUpProfile with parameter name and property
3. loop through contacts, 
     -does firstName === name parameter given by calling the function?
        -If  YES:
          -Does the property exist IN contact? 
            -If YES: return the property value.
            -If NO: return "No such property"
        -If NO:  keep looping through the array to find the property
      -After complete iteration with no matches found:
      return "No such contact"
*/
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

//define the function
function lookUpProfile (name, property){
  for (const contact of contacts) {
        if (contact.firstName === name) {
          if (property in contact){
            return contact[property];
          }
          else {
            return "No such property";
          }
        }
      }
      return "No such contact";
}


//tests from AI
console.log(lookUpProfile("Akira", "lastName"));     // Should output: "Laine"
console.log(lookUpProfile("Harry", "likes"));        // Should output: ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Bob", "number"));         // Should output: "No such contact"
console.log(lookUpProfile("Akira", "age"));          // Should output: "No such property"
console.log(lookUpProfile("Kristian", "lastName"));  // Should output: "Vos"
console.log(lookUpProfile("Sherlock", "likes"));     // Should output: ["Intriguing Cases", "Violin"]