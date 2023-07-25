/* In JavaScript, a prototype is an object that is associated with every function and allows the function to have properties and methods that can be shared among all instances of that function.
For example, let's say we have a function called Person that creates new person objects with a name property:

function Person(name) {
  this.name = name;
}
If we want to add a method to all Person objects, we can add it to the Person.prototype object: 

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};
Now, when we create a new Person object, it will have access to the greet method:

var person1 = new Person("John");
person1.greet(); // output: "Hello, my name is John"
var person2 = new Person("Jane");
person2.greet(); // output: "Hello, my name is Jane"
By adding the greet method to the Person.prototype object, we ensure that all Person objects created using the Person function will have access to it,


*/