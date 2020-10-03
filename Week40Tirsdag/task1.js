

//Finder de navne der indeholder "a"
var names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

filteredNames = names.filter(n => n.includes("a"))

console.log(names)


let mapArray = names.map(n => n.split("").reverse().join(""))

console.log(mapArray)



