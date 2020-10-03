
//Her anvender vi map + callback til at returnere et nyt array til at udskrive et nyt array
var numbers = [1, 3, 5, 10, 11]

function returnNewNumbers(array, callback) {

    return callback(array)
}

function makeNewNumbers(array) {
    let count = 0;
    let newArray = numbers.map(function (n) {

        if (n != 11) {
            count++
            return n + numbers[count]
        } else return n

    })
    return newArray
}
console.log(returnNewNumbers(numbers, makeNewNumbers))


let names = ["Hassan", "Peter", "Jan", "Boline"]

let nameString = names.map(function (n) {

    let nArray = n.split("")
    nArray.unshift("<a href=””>")
    nArray.push("</a>\n")
    return nArray.join("")
})

nameString.unshift("<nav>\n")
nameString.push("</nav")
console.log(nameString.join(""))



var persons = [{ name: "Hassan", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Boline", phone: "79345" }];

let mapPersons = persons.map(function(person){

    return "<tr><td>" + person.name + "</td><td>" + person.phone + "</td>\n<tr>\n"


})

let template = "<table>\n<tr>\n<th>name</th>\n<th>phone</th>\n</tr>"

mapPersons.unshift(template)
mapPersons.push("</table>")

console.log(mapPersons.join(""))
