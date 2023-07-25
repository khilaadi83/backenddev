/* In JavaScript, a promise is an object that represents a value that may not be available yet, but will be at some point in the future. Promises are typically used to handle asynchronous operations, such as fetching data from a server or reading a file from disk.

A promise has three states: pending, fulfilled, or rejected. When a promise is pending, it means that the operation it represents hasn't completed yet. When a promise is fulfilled, it means that the operation has completed successfully, and the promised value is available. When a promise is rejected, it means that the operation failed, and an error value is available.


*/
var XMLHttpRequest = require('xhr2');

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data =
        ({
          name: 'kartik'
        })
      if (data) {
        resolve(data)
      } else {
        reject(data)
      }
    }, 2000)

  })
}

fetchData().then((data) => {
  console.log(data);
}).catch((e) => {
  console.log("error", e)
})

/* Create a function that takes a number as an argument and returns a Promise that resolves if the number is even and rejects if the number is odd.

Create a function that takes a string as an argument and returns a Promise that resolves with the string reversed.

Create a function that takes an array of numbers as an argument and returns a Promise that resolves with the sum of the numbers.

Create a function that takes an array of URLs as an argument and downloads the contents of each URL using Promises. The function should return an array of Promises, where each Promise resolves with the contents of the corresponding URL.

Create a function that takes an array of Promises as an argument and executes them in parallel using Promise.all(). The function should return a Promise that resolves with an array of results, where each result is the resolved value of the corresponding Promise. */

function EvenOdd(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(number)
    } else {
      reject(number);
    }
  })
}

EvenOdd(4).then((data) => {
  console.log("It is an even Number")
}).catch((e) => {
  console.log("Odd number");
})



/* Create a function that takes a string as an argument and returns a Promise that resolves with the string reversed.
 */

function ReversedString(value) {
  return new Promise((resolve, reject) => {
    let reversedString = value.split("").reverse().join('');
    if (reversedString) {
      resolve(reversedString);
    } else(reject(reversedString))

  })
}
ReversedString("honesinght").then((data) => {
  console.log("String Reversed Successfull", data)
}).catch((e) => {
  console.log("Some error occured in converstion");
})



/* Create a function that takes an array of numbers as an argument and returns a Promise that resolves with the sum of the numbers. */


function sumofArray(arr) {

  return new Promise((resolve, reject) => {
    let sum = arr.reduce((acc, element) => {
      return acc + element
    }, 0)
    if (sum) {
      resolve(sum)
    } else(reject(sum))
  })

}



let arr = [1, 2, 3, 45, 5];
sumofArray(arr).then((data) => {
  console.log("Sum of Array", data)
}).catch((e) => {
  console.log("some error in calucualting sum")
})



/* Create a function that takes an array of URLs as an argument and downloads the contents of each URL using Promises. The function should return an array of Promises, where each Promise resolves with the contents of the corresponding URL. */

//but we will only use a single url

/* function UrlRequest(url){
  const xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        xhr.open('GET',url);
        xhr.onload  = ()=>{
          if (xhr.status == 200){
            resolve(xhr.responseText);
          }else(reject("Unknown Error => Failed to serve the request"))
        }
        xhr.onerror = () => {
          reject(`Failed to download ${url}. Network error.`);
        };
        xhr.send();
    })

}

UrlRequest("www.google.com").then((data)=>{
  console.log("Success XHR Request",data)
}).catch((e)=>{
  console.log("Some Unknown error",e);
}) */


/* Create a function that takes an array of strings as an argument and returns a Promise that resolves with an array of the lengths of the strings. If any of the strings are empty, the Promise should reject with an error message. */



function emptyString(arr) {
  return new Promise((resolve, reject) => {
    const lengths = arr.map(str => {
      if (str === '') {
        reject('Empty string found');
      }
      return str.length;
    });
    resolve(lengths);
  });

}

let arrofStrings = ["kartik", "cc", "narang"];

emptyString(arrofStrings).then((data) => {
  console.log("Array of String Length NOn empty array", data)
}).catch((e) => {
  console.log("Empty String Encountereddd", e);
})

/* let values = arrofStrings.map((e)=>{
  return e.length;
})
console.log("Length of elements are", values); */




/* Async AWAIT */
/* Using async/await allows developers to write asynchronous code in a more synchronous-like manner, making the code easier to read and understand. It also simplifies error handling by allowing developers to use traditional try/catch blocks, rather than having to chain multiple .catch() methods.

Additionally, async/await eliminates the need to manually manage Promise chains, which can become difficult to read and maintain as the codebase grows. It also makes it easier to write sequential asynchronous code, as each await keyword waits for the previous asynchronous operation to complete before moving on to the next line of code.

In summary, async/await provides a cleaner, more readable, and easier-to-maintain way of writing asynchronous code, making it the preferred method over Promises in modern JavaScript development. */

/*  */

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
fetchData().then((data) => { 
  console.log(data);
});



/* Q2- Write a program that uses async/await to fetch data from two different APIs and then combines the results into a single response */



async function twoResponses() {
  try {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response2 = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data1 = await response1.json();
    const data2 = await response2.json();
    const mergedData = [...data1, ...data2]; // combine data arrays
    console.log(mergedData)
  } catch (e) {
    console.log(e)
  }
}