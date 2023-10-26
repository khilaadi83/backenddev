//number , boolean, string, null and undefined are primitive types passed by value
// object, arrays are passed by refrence 
/* Question 1:
Write a function that takes two objects as input and returns a new object with all the properties from both objects. If a property exists in both objects, the value from the second object should be used.

Question 2:
Given an array of objects representing books, each with properties like title, author, and year, write a function that returns an array of all the unique authors in the list.

Question 3:
You have an object representing a shopping cart, with properties like items (an array of products) and total (the total cost of all items). Write a function that adds a new product to the cart, updating the items and total properties accordingly.

Question 4:
Write a function that takes an object as input and returns a new object with all the enumerable properties of the input object, but with their values reversed. For example, {a: 1, b: 2, c: 3} would become {1: 'a', 2: 'b', 3: 'c'}.

Question 5:
Given an array of objects representing students, each with properties like name, age, and grades (an array of numbers), write a function that calculates the average grade for each student and adds it as a new property to the student object. The function should return an array of all the updated student objects. */
/* Shallow Copy 
let obj ={
    name: "kartik",
    address: ['gnagar', 'spur']
}
let newobj = Object.assig({},obj)
now if i create a shallow copy of this object and try to modify name newobj.name="narang" it will change it in only newobj as it is primitive type pass by value
now if i try to change the address property newobj.address=['pune'] it will change in obj variable as well as new obj because both are sharing same refrence variable this is called shallow copy


    - All feilds and key values of the orignal objects are copied to the new object
    - modifying a value through a refrence  inside a cloneed object also modifies the orginal object
    -shallow copy is an copy of object that contains all the orignal objects properteis but only the refrence to those properties are copied
    - Means that if a property value is an object or an array the new object will refrence to the same object rather tha creating a new copy of  one

    Q1. How does a shallow copy differ from a deep copy in JavaScript?
        A shallow copy differs from a deep copy in that a shallow copy only copies the references to the original object or array's properties, while a deep copy creates new copies of all of the original object or array's properties and their values. This means that a deep copy is completely independent of the original object or array, while a shallow copy shares some properties with the original object or array

        Q2. Why might you want to create a shallow copy of an object or array in JavaScript?
        You might want to create a shallow copy of an object or array in JavaScript if you need a copy of the original object or array, but you don't want to create new copies of all of its
        properties and their values. This can be more efficient than creating a deep copy, especially if the object or array contains a large number of nested objects or arrays.

        Q3. How can you create a shallow copy of an object in JavaScript using the Object.assign() method?
You can create a shallow copy of an object in JavaScript using the Object.assign() method. Here's an example:
ccode
const obj1 = {a: 1, b: {c: 2}};
const obj2 = Object.assign({}, obj1);
In this example, obj2 is a shallow copy of obj1. The Object.assign() method creates a new empty object, and then copies all of the properties of obj1 onto that new object.
Because obj1 has a nested object (b), obj2 will reference the same nested object as obj1

Q4. Can you modify the properties of a shallow-copied object without affecting the original object? Why or why not?
You can modify the properties of a shallow-copied object without affecting the original object, as long as you only modify properties that are not nested objects or arrays. If you modify a nested object or array, the change will be reflected in both the shallow-copied object and the original object, because they share the same reference to the nested object or array.
*/

const { address } = require("ip");
const { set } = require("lodash");
const { http } = require("npmlog");

const person = {

    name: "Alice",
    age: 25,
    color: "black",
    occupation: "Software Engineer",
    hobbies: ["reading", "hiking", "traveling"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
};
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
    features: ["backup camera", "Bluetooth", "keyless entry"],
    owner: {
        name: "Bob",
        age: 40,
        address: {
            street: "456 Elm St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        }
    }
};
let obj = {
    name: "kartik",
    address: ['gnagar', 'spur']
};

let objnew = Object.assign({}, obj);

objnew.address[0] = 'new value';

console.log(obj.address); // Output: ["new value", "spur"]
console.log(objnew.address); // Output: ["new value", "spur"]


/* Question 1:
Write a function that takes two objects as input and returns a new object with all the properties from both objects. If a property exists in both objects, the value from the second object should be used. */

function codingquestionOne(obj1, obj2) {
    let newobj = {
        ...obj1,
        ...obj2
    };
    return newobj;
}

let output = codingquestionOne(person, car);
console.log(output)

/* 
Given an array of objects representing books, each with properties like title, author, and year, write a function that returns an array of all the unique authors in the list. */
function Problem2() {
    const books = [{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949
    },
    {
        title: '1985',
        author: 'George Orwell',
        year: 1949
    }
    ];
    let newarr = [];

    for (var i = 0; i < books.length; i++) {
        let author = books[i].author;
        if (!newarr.includes(author)) {
            newarr.push(author);
        }
    }
    console.log(newarr);



}
Problem2();

/*  Question 3:
You have an object representing a shopping cart, with properties like items (an array of products) and total (the total cost of all items). Write a function that adds a new product to the cart, updating the items and total properties accordingly.
*/
function addToCart(shoppingCart, newProduct) {
    shoppingCart.items.push(newProduct);
    shoppingCart.total += newProduct.price;

}
const shoppingCart = {
    items: [{
        name: 'T-shirt',
        price: 20.99
    },
    {
        name: 'Jeans',
        price: 49.99
    }
    ],
    total: 70.98
};

const newProduct = {
    name: 'Sneakers',
    price: 89.99
};

addToCart(shoppingCart, newProduct);
console.log("shopping cart total", shoppingCart);


/* 
Question 4:
Write a function that takes an object as input and returns a new object with all the enumerable properties of the input object, but with their values reversed. For example, {a: 1, b: 2, c: 3} would become {1: 'a', 2: 'b', 3: 'c'}. */

function reverseProperties(obj) {
    let newobj = {};
    for (key in obj) {
        newobj[obj[key]] = key;
    }
    return newobj
}
let ansreverse = reverseProperties({
    a: 1,
    b: 2,
    c: 3
});
console.log(ansreverse);

/* Question 5:
Given an array of objects representing students, each with properties like name, age, and grades (an array of numbers), write a function that calculates the average grade for each student and adds it as a new property to the student object. The function should return an array of all the updated student  */

const students = [{
    name: "John",
    age: 18,
    grades: [85, 90, 92]
},
{
    name: "Sarah",
    age: 19,
    grades: [80, 88, 91]
},
{
    name: "David",
    age: 17,
    grades: [92, 93, 95]
}
];


function calculatesTotal(students) {
    var totalgrade = 0;
    /* students.forEach(value=>{
      console.log(value)
      for (let i=0; i<value.grades.length;i++)
      {
               totalgrade = totalgrade +value.grades[i];
            

      }
      var avggrade = totalgrade/value.grades.length
      value.avggrade = avggrade;

    }) */

    return students.map(currentstudent => {
        const totalgrades = currentstudent.grades.reduce((acc, value) => {
            return acc + value;
        }, 0)
        const avggrade = totalgrades / currentstudent.grades.length;
        return {
            ...students,
            avggrade
        }
    })
}
let outcome = calculatesTotal(students)
console.log(outcome);
/* Apologies for the confusion. Here are some coding questions related to `Object.defineProperties()`:

1. Write a code snippet using `Object.defineProperties()` to define two properties on an object: `name` with a value of "John" and `age` with a value of 25.

2. Create an object called `person` with an empty object as its prototype. Use `Object.defineProperties()` to define a property `name` with a value of "Sarah" and a property `age` with a value of 30.

3. Implement a function called `makeReadOnly` that takes an object as a parameter and uses `Object.defineProperties()` to make all properties of the object read-only.

4. Write a code snippet that demonstrates how to use `Object.defineProperties()` to define a getter and setter for a property called `price` on an object. The getter should return the value of the property, and the setter should double the value before setting it.

5. Create an object called `car` with properties `brand` and `color`. Use `Object.defineProperties()` to define a property `description` that returns a string combining the brand and color of the car.

Remember to provide the solution or ask for it if you need assistance. */
/* Sure, I'd be happy to help clarify the spread operator for you!

The spread operator in JavaScript is denoted by three dots (`...`) and is used to "spread" the elements of an iterable (like an array or a string) into a new array or object.

Here are a few examples of how the spread operator can be used:

1. To concatenate arrays:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

2. To create a copy of an array:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3]
```

3. To add elements to an array:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
```

4. To create a copy of an object:

```javascript
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { ...obj1 }; // { name: 'Alice', age: 25 }
```

5. To merge objects:

```javascript
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { gender: 'female', occupation: 'engineer' };
const obj3 = { ...obj1, ...obj2 }; // { name: 'Alice', age: 25, gender: 'female', occupation: 'engineer' }
```

I hope this helps! Let me know if you have any further questions. */

/* 1. Write a code snippet using `Object.defineProperties()` to define two properties on an object: `name` with a value of "John" and `age` with a value of 25. */

function Objectdefineproperty() {
    let newobject = {};
    Object.defineProperty(newobject, "name", {
        value: "john",
        writable: true
    })
    Object.defineProperty(newobject, "age", {
        value: 27,
        writable: true
    })
    console.log(newobject.name);
    console.log(newobject.age);

}
Objectdefineproperty();

/* 2. Create an object called `person` with an empty object as its prototype. Use `Object.defineProperties()` to define a property `name` with a value of "Sarah" and a property `age` with a value of 30. */
function ObjectdefinePrototype() {
    let person = {}
    let protoboje = Object.create(person);
    Object.defineProperties(protoboje, {
        name: {
            value: "sarah"
        },
        age: {
            value: 30
        }

    })
    console.log(protoboje.name)
}
ObjectdefinePrototype();

/* 3. Implement a function called `makeReadOnly` that takes an object as a parameter and uses `Object.defineProperties()` to make all properties of the object read-only. */
function makeReadOnlyprop(obj) {
    Object.defineProperties(obj, {
        writable: {
            value: false
        }
    })
}
makeReadOnlyprop({
    name: "kartik",
    age: 27
})

/* 4. Write a code snippet that demonstrates how to use `Object.defineProperties()` to define a getter and setter for a property called `price` on an object. The getter should return the value of the property, and the setter should double the value before setting it. */

function getterandsetter() {
    let product = {

    };
    Object.defineProperties(product, {
        price: {
            get() {
                return this._price; //In JavaScript, an underscore prefix is often used to indicate that a property or method is intended to be private, meaning that it should not be accessed or modified from outside the object.
            },
            set(value) {
                this._price = value * 2;
            }
        }


    })
    product.price = 10;
    console.log("Price is doubled", product.price);
}

getterandsetter();

/* Write a code snippet that demonstrates how to use Object.defineProperties() to define a read-only property called fullName on an object that concatenates the firstName and lastName properties */
/* Write a code snippet that demonstrates how to use Object.defineProperties() to define a property called age on an object that can only be set to a positive integer: */


function firstnameandlastname() {
    let fullname = {};
    Object.defineProperties(fullname, {
        firstname: {
            set(firstname) {
                this._firstname = firstname;
            }
        },
        lastname: {
            set(lastname) {
                this._lastname = lastname;
            }
        },
        concate: {
            get() {
                return this._firstname + this._lastname;
            }
        }


    })
    fullname.firstname = "kartik"
    fullname.lastname = "narang"
    console.log(fullname.concate);
}
firstnameandlastname();
/* /* Write a code snippet that demonstrates how to use Object.defineProperties() to define a property called age on an object that can only be set to a positive integer: */

function positiveInteger() {
    let obj = {

    };

    Object.defineProperties(obj, {
        age: {
            set(value) {
                if (value >= 0) {
                    this._age = value;
                } else {

                    console.log("Only Positive age is allowed")
                    return null;
                }
            }

        },
        getage: {
            get() {
                return this._age;
            }
        }
    })
    obj.age = -29;
    console.log("kartik narang age is ===> ", obj.getage);
}
//pass
positiveInteger();

/* // Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function
myFunction
(
obj
)
{
for (const key in obj){
   
}
return 
}
Test Cases:
myFunction({ continent: 'Asia', country: 'Japan' })
Expected
'Japan' */

function arrayofobject() {
    let objvalues = [{
        name: 'sfcc.order_date',
        type: 'STRING'

    },
    {
        name: 'sfcc.created_by',
        type: 'STRING'

    },
    {
        name: 'sfcc.isDiscountApplied',
        type: 'BOOLEAN'
    },
    {
        name: 'sfcc.customer_locale',
        type: 'STRING'

    },
    {
        name: 'sfcc.shipments',
        type: 'JSON'

    },
    {
        name: 'sfcc.taxType',
        type: 'JSON'

    },
    {
        name: 'custom.merchandizeTotalNetPrice',
        type: 'STRING'

    }]
    for (let key in objvalues) {
        console.log(objvalues[key].name)
    }
    console.table(objvalues);
}
arrayofobject();

function sumofarray() {
    let numb = [5, 5, 4, 4];
    let sum = numb.reduce((acc, value) => {
        return acc + value;
    }, 0)
    console.log("sum of array is", sum)
}
sumofarray();

/* Console.group */

console.group("About me")
console.warn("Alert Alert")
console.error("I am error")
console.groupEnd();

console.log(
    '%c Hello, Everyone!',
    'padding: 15px; background-color: #2ecc71; color: black'
);

let concateString = (val) => val.charAt(0).toUpperCase() + val.slice(1).trim();
console.log(concateString("hello i m kartik"));

/* Sure, here's a coding exercise in JavaScript:

Write a function called mergeObjects that takes in two or more objects as arguments and returns a new object that merges all of the properties from each object into a single object. The function should work as follows: */

function mergeOject(target, source) {
    // using spread operator
    /* let newobj = {...target, ...source};
    console.log(newobj) */
    let newobje = {};

    for (let i = 0; i < arguments.length; i++) {
        let source = arguments[i];

        for (let key in source) {
            newobje[key] = source[key]
        }
    }
    console.log(newobje)

}
mergeOject({ name: "kartik", surname: "narang" }, { age: 28, weight: 67 })




/* The mergeObjects function should combine all of the properties from each object into a single object. If any of the objects have the same property name, the value from the last object passed to the function should be used.

Here's an example implementation to get you started */



/* Destructing values from objects */
function destructionFunction() {
    const person = {
        name: 'John',
        age: 30,
        gender: 'male'
    }
    // now suppose i want to extract only name and age
    // I would have done persone.name, then person.age etc..

    const { age, gender } = person;
    console.log(gender, age);
}
destructionFunction();

/* With the two methods, you can programmatically extract a certain text or filename, as you can see below: */

function extractFiles() {
    //show only files of .txt extension
    const files = [
        'text.txt',
        'document.txt',
        'image.jpg',
        'script.js',
        'docs.txt',
    ];

    let filteredfiles = files.filter(file => {
        return file.endsWith('.txt');

    })
    console.log("Text files are", filteredfiles)
}
extractFiles();

/*  Dipti Code*/
function dipti() {
    httpParams = {
        q: "Quadriga M -nahkalaukku"
    }
    searchPhrase = httpParams.q;
    var test = httpParams.q;
    var searchPhraseNormalized = test.replace(/\s+([-@&:_])/g, '$1').replace(/\s+/g, ' ').trim();
    if (searchPhraseNormalized != searchPhrase) {
        //productSearch.setSearchPhrase(test);
        console.log("inside if")
    } else {
        //productSearch.setSearchPhrase(searchPhrase);
        console.log("inside else")
    }
    // searchPhrase =  searchPhraseNormalized || httpParams.q;
    //productSearch.setSearchPhrase(searchPhrase);
    console.log(searchPhrase);
}
dipti();

function firstletterCapital(value) {
    let newarr = value.split(' ').map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    })
    console.log(newarr.join(' '));
}
firstletterCapital("i am kartik")

/* Multiple ways to clone objec

const originalObject = {
  name: 'Kolade',
  luckyNum: 10,
  isFootballFan: true,
  club: 'Chelsea',
};

// clone with spread operator
const clonedObject1 = { ...originalObject };

// clone with Object.assign()
const clonedObject2 = Object.assign({}, originalObject);

// deep cloning with JSON.stringify() and JSON.parse()
const clonedObject3 = JSON.parse(JSON.stringify(originalObject));
console.table(clonedObject1);
console.table(clonedObject1);
console.table(clonedObject1);

*/



function objekeys() {
    const testObject = {
        name: "John",
        age: 30,
        hobbies: ["reading", "running", "traveling"],
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zipCode: "10001"
        }
    };

    let ans = Object.keys(testObject).forEach(arr => {
        console.log(arr);
    });
    console.log(ans);
}
objekeys();


//Object destrucing is a ways to extract properties from an object and assign them to vaaribles

function objecDestructering() {
    var person = {
        name: 'Alice',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA'
        }
    };

    /* let {name,address:{city}} = person; //extracted name and city from the object
    console.log(name);
    console.log(city); */
    let { age, ...rest } = person;
    person = rest;
    console.log(person);
    //we explicitly removed the age from the object
}
objecDestructering();

/* Fucntions

    parameter are function add(a,b) // this  are parameters
    arguments are actual values add(3,5); //arugments
*/

//IIFE - Immideately invoked function
/* Ever wanted to execute a function right after defining it? That's where IIFEs come into play. They're like the express lane of JavaScript.

All you need to do is to define the function, wrap it in parentheses, and then add another pair of parentheses to call it immediately. You can personalize your IIFE by adding a parameter. */
(function hello(name) {
    console.log(`hello mr ,${name}`)
})("kartik")


/* 1. This keyword always refers to an object
   2. This is not a variable its and keyword
*/

function thisfunction() {
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        concatfirstandlasname: function () {
            return this.firstName + " " + this.lastName;
        }

    }
    console.log(person.concatfirstandlasname);
};
thisfunction();

/* Write a function that takes two parameters, firstName and lastName, and returns an object with the properties firstName, lastName, and id set to null. */

function objectCode() {
    const person = {
        firstName: {
            get() {
                return this._firstname
            }, set(firstName) {
                this._firstName = firstName;
            }

        },
        lastName: {
            get() {
                return this._lastName
            }, set(value) {
                this._lastName = value;
            }

        }


    }
    person.firstName = "artu"
    person.lastName = "naru"
    console.log(person.firstName)
    console.log(person.lastName)
}
objectCode();
/* Write a function that takes an object with the properties firstName, lastName, and id, and removes the property id from the object. */
function removeProperty() {
    var person = {
        name: "kartik",
        lastname: "narang",
        id: 3
    }
    let { id, ...rest } = person;
    person = rest;
    console.log("WE have officialy remove id property from object")
    console.log(person);
}
removeProperty();

function constructorFunction(obj) {

    this.name = obj.name;
    this.age = obj.age;

}

let ans = new constructorFunction({
    name: "kartik",
    id: 12,
    age: 23,
    company: "born"
})
let ans2 = new constructorFunction({
    name: "akshay",
    id: 122,
    age: 23,
    company: "born"
})


console.log(ans2);


function constructorfunctionexample(radius) {
    this.radius = radius;
    console.log(this)
}
let instancevaraible = new constructorfunctionexample(1);
console.log("Output of constructorfunctionexample", instancevaraible);


function ForterOrder(){
    
   
   
    //constructor function
    var order = {
        creationDate: '2023-10-25T10:00:00Z',
        channels: [
            {
                party: {
                    id: 'dummyMerchantAgentId'
                }
            }
        ],
        custom: {
            vonageGUID: '1234567890',
            crcName: 'Dummy CRC Name'
        },
        billingAddress: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };
function vonageCallerInfo(order) {


    var callDuration = '39 minutes'
    this.customerWebId = '',
        this.callerFirstName = order.billingAddress.firstName,
        this.callerLastName = order.billingAddress.lastName,
        this.callerId = 'getInteractionResponse.connectTo',
        this.callStartTime = '5 minutes',
        this.callDuration = callDuration,
        this.remarks = '',
        this.merchantAgentData = {
            merchantAgentName: order.custom.crcName,
            merchantAgentId: order.channels[0].party.id

        }
}
    if (true){
        this.phoneorderinformation = new vonageCallerInfo(order)
    }

}

/* let vonageinformation = new vonageCallerInfo(order)
console.log('vonageCallerInfo Object', vonageinformation) */
let ans33 = new ForterOrder();
console.log(ans33)

