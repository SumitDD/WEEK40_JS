
//Anvender callback til at filtere navne der inkluderer "a"
let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

function myFilter(nameArray, callback) {

    return callback(nameArray)
}

function filterTheNames(nameArray) {

    let newArray = []
    nameArray.forEach(function (element) {
        if (element.includes("a")) {
            newArray.push(element)
        }

    })
    return newArray

}
console.log(myFilter(names, filterTheNames))

//Anvender map og callback til at reverse alle navne i et array

function myMap(nameArray, callback) {

    return callback(nameArray)
}

function reverseNames(nameArray){
    let newArray = []
    nameArray.forEach(function(element){
        newArray = nameArray.map(n => n.split("").reverse().join(""))
    })

    return newArray

}
console.log(myMap(names, reverseNames))
