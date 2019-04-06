let myArray = [1, 2, 3, 4, 5, 4, 3, 2];

console.log("creating a set from array");
let mySet = new Set(myArray);
console.log(mySet);

console.log("for every element on a set");
for(let x of mySet.values()){
    console.log(x);
}

console.log("for every element on a array");
for(let x of myArray){
    console.log(x);
}