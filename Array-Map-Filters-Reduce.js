
/* map is similar to forEach, but it returns a new array with the results of calling a provided function on every element in the calling array. In other words, map applies a function to each element of an array and returns a new array with the updated values. */

/* Given an array of strings, use the map() method to create a new array that contains the length of each string. */

let arr = ['kartik', 'narang', 'ashwini', 'zende', 'anjali'];
let newarr = arr.map((value) => {
    return value.length;
})


console.log("Old array is untouched", arr);
console.log("This is the new array", newarr);

/* Given an array of objects, use the map() method to create a new array that contains only the name property of each object. */

const students = [{
        name: 'Alice',
        grade: 90
    },
    {
        name: 'Bob',
        grade: 80
    },
    {
        name: 'Charlie',
        grade: 95
    },
    {
        name: 'David',
        grade: 85
    },
    {
        name: 'Eve',
        grade: 92
    }
];


let arr2 = students.map((element) => {
    return element.name;
})
console.log("ONly names from array of objec element", arr2);

/* Given an array of strings, use the map() method to create a new array that contains the first letter of each string */
let firstLetter = arr.map((value) => {
    return value.charAt(0);
})
console.log("ONly First Letter of String", firstLetter);

/* 
Filter method Questions
1. Write a function that takes an array of strings as input and returns a new array with all the strings that contain the letter 'a' using the filter method.
let arr = ['kartik', 'narang', 'ashwini', 'zende','anjali'];
*/

let newfilterarray = arr.filter((element) => {
    return element.charAt(0) == 'a';
})
console.log("String with first letter a are as follow", newfilterarray);

/* Given an array of objects with each object containing a name and age property, write a function that returns an array with only the objects of people who are over the age of 18. */

const people = [{
        name: 'John',
        age: 15
    },
    {
        name: 'Jane',
        age: 30
    },
    {
        name: 'Bob',
        age: 13
    },
    {
        name: 'Sally',
        age: 35
    }
];

let peopleFilterarray = people.map((element) => {
    return element.age > 18 ? element : '';
})
console.log("People with Age > 18", peopleFilterarray);

/* Reduce Questions
1. Display Sum of Array

*/

let reduceArray = [1, 3, 4, 5, 6];
let newReduceArraySum = reduceArray.reduce((accu, element) => {
    return accu + element
}, 0)
console.log("Sum of array using Reduce mehtod", newReduceArraySum);


/*Given an array of objects with each object containing a name and score property, write a function that returns the average score of all the objects using the reduce method  */

let players = [{
    player1: {
        name: 'John',
        score: 10
    },
    player2: {
        name: 'Jane',
        score: 20
    },
    player3: {
        name: 'Bob',
        score: 15
    },
    player4: {
        name: 'Sally',
        score: 25
    }
}]

    // 0 means initail starting value
    let totalScore = players.reduce((acc, player) => {
        // Get the scores for each player
        const scores = Object.values(player).map(p => p.score); // returned the new array which contains the score
        // Sum up the scores and add them to the accumulator
        return acc + scores.reduce((sum, score) => sum + score, 0);
      }, 0);
      
      let averageScore = totalScore / (players.length * Object.keys(players[0]).length);
      
      console.log(averageScore); // Output: 17.5

      // take array of stringsand return and object that contains the frequency of each word in array
     
       
      function countWords() {
        let arr=['kartik','narang','kartik']
        return arr.reduce((wordCount, str) => {
          const words = str.split(" ");
          words.forEach(word => {
            if (!wordCount[word]) {
              wordCount[word] = 1;
            } else {
              wordCount[word]++;
            }
          });
          return wordCount;
        }, {});
      }
      console.log("Function Coutn Words",countWords());

      //take array of object representing salesdata for a company and reutn an objectthat contains the total sales for each month of the year
        function SalesTask(){
            let salesData = [
                { month: 'Jan', sales: 10000 },
                { month: 'Feb', sales: 20000 },
                { month: 'Mar', sales: 30000 },
                { month: 'Apr', sales: 40000 },
                { month: 'May', sales: 50000 },
                { month: 'Jun', sales: 60000 },
                { month: 'Jul', sales: 70000 },
                { month: 'Aug', sales: 80000 },
                { month: 'Sep', sales: 90000 },
                { month: 'Oct', sales: 100000 },
                { month: 'Nov', sales: 110000 },
                { month: 'Dec', sales: 120000 }
              ];
              // return total seales for each month of the year

                return salesData.reduce((acc,data)=>{
                   if (data.month in acc){
                    acc[data.month] += data.sales
                } else{
                    acc[data.month] = data.sales
                }
                      return acc;
                },{})
                
        }
        console.log("sales Task",SalesTask());


/* Few Example to work on Objects

1- Create an object book with properties title, author, and publishedYear. Set the values to "To Kill a Mockingbird", "Harper Lee", and 1960 respectively. Add a new property genre and set its value to "fiction".
*/


/* Async AWai */
 /* Write a function called fetchUserData that uses the fetch function to get user data from an API endpoint. The API returns a JSON object with the user's name, email, and phone number. Parse the JSON response and log the user's name to the console. */
/*  const fetch = import('node-fetch');
 async function fetchUserData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    let info =  await data.json();
    console.log(info);
  }
  
  fetchUserData();
 */

