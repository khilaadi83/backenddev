//number , boolean, string, null and undefined are primitive types passed by value
// object, arrays are passed by refrence 

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