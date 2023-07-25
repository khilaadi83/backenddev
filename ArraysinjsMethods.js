const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
// converts array into string

console.log(fruits.join('*'));
/* The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator: */

fruits.pop(); /* Pop method removes last element of the array */
console.log("Pop Elements",fruits);

fruits.push("lichi"); /* Push method adds a new element at end of the array */
console.log("Push Elements",fruits);


/* Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last. */
fruits.shift();
console.log("We have used the shift method here", fruits);

/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: */
fruits.unshift("pineapple");
console.log("We have used the unshift method here", fruits);


/* Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead */

/* Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array. */

// Example 1: Inserting an element at a specific index
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// Example 2: Removing an element at a specific index
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers); // [1, 2, 4, 5]

// Example 3: Replacing an element at a specific index
const colors = ['red', 'green', 'blue'];
colors.splice(1, 1, 'yellow');
console.log(colors); // ['red', 'yellow', 'blue']

// Example 4: Removing a range of elements from an array
const myfruits = ['apple', 'banana', 'cherry', 'grape', 'orange'];
fruits.splice(1, 2);
console.log(fruits); // ['apple', 'grape', 'orange']

// Example 5: Adding multiple elements to an array at a specific index
const animals = ['cat', 'dog'];
animals.splice(1, 0, 'bird', 'fish');
console.log(animals); // ['cat', 'bird', 'fish', 'dog']