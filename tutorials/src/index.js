//Creating a Set
let aSet = new Set();

//Adding different things inside the set
aSet.add(75);
aSet.add("Hello World");
aSet.add({"name" : "MyName"});

//logging the set
console.log(aSet);

console.log("Checking if the set has 75 :"+aSet.has(75))

console.log("Checking if the set has 76 :"+aSet.has(76))

console.log("Checking if the set has object :"+aSet.has({"name" : "MyName"}))

aSet.delete(75);

console.log("Checking if the set has 75 (after deleting) :"+aSet.has(75))

//Adding the same element twice to a set will be ignored
aSet.add("Hello World");

console.log(aSet);



