
//a
var all = ["Hassan", "Peter", "Carla", "Boline"];

console.log(all.join("#"))

//b
var numbers = [2, 3, 67, 33];

function sumNumbers(numberArray, callback) {

    return callback(numberArray)
}

function reduceNumbers(numberArray) {

    return numberArray.reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(sumNumbers(numbers, reduceNumbers))

//c

var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

let reducer = (accumulator, currentValue) => accumulator + currentValue;

let newReducedArr2 = (members.map(m => m.age).reduce(reducer)) / members.length
console.log(newReducedArr2)

//d
const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

let countedNames = votes.reduce(function (allVotes, vote) {
    if (vote in allVotes) {
        allVotes[vote]++
    }
    else {
        allVotes[vote] = 1
    }
    return allVotes
}, {})

console.log(countedNames)
