let account = {
    first: "kartik",
    last: "narang",
    id: 23,

}
// Write a function which takes an object as an argument and returns an array of all the keys it the object using object.keys

function arrayofKey(val) {
    console.log("Values of Arrayofkey function")
    let allKeys = Object.keys(val);
    console.log(allKeys);
}
arrayofKey(account);
//2. wsap that taks an object as in argument and log each key and is correspoing value using object.entries
function logEachkeyandValue(account){
    let newmaparray = Object.entries(account);
    console.log(newmaparray);
//3.return an array of all the values in object using object.values
let newvaluearray = Object.values(account);
console.log(typeof(newvaluearray));
console.log("Assignment 3", newvaluearray);
    
}
logEachkeyandValue(account);

//Write a function that  an array of objects representing different books and returns an object representing the total number of books by each author
function Assignment4(){
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: '1984', author: 'George Orwell' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { title: 'The Bell Jar', author: 'Sylvia Plath' },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
        { title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling' },
        { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams' },
        { title: 'The Da Vinci Code', author: 'Dan Brown' },
      ];

      const countByAuthor = books.reduce((acc, book) => {
        const author = book.author;
        acc[author] = (acc[author] || 0) + 1;
        return acc;
      }, {});

        console.log("count by author Ass 4",countByAuthor);
        

}
Assignment4();


let propertynames = Object.keys(account); // returns array
console.log("Property names", propertynames); // 
console.log("Object values", Object.values(account));
// .keys() returns array of an array of property names of the object`

/* Object.entries() can also be use ful for creating maps
    1.object.entries can be useful when you need to iterate over the peoprties on an object and access both the key and the value of each property.
    2. We can manipulate easily using array methods like map, filter and reduce
*/
console.log("Object Entries", Object.entries(account));
let arrayMap = Object.entries(account);
return arrayMap.map(val => {
    console.log('inside map', val);
})







