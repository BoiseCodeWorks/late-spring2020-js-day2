let granolaBar = {
  size: "small",
  wrapperColor: "red",
  brand: "Chewy",
  flavor: "Chocolate Chip",
  quantity: 1,
  ingredients: ["Flour", "Chocolate Chips", "Granola", "Sugar", "dipehASAHKHFSDYUjdsjhfds"],
  delicious: true,
  devoured: true
}

for (let key in granolaBar) {
  console.log(granolaBar[key])
}


let userInput = "size"

granolaBar.size
granolaBar[userInput]


let students = [
  {
    name: "robet",
    hairColor: "sandy brown"
  },
  {
    name: "eva",
    hairColor: "brown"
  },
  {
    name: "matt",
    hairColor: false
  },
  {
    name: "brandon",
    hairColor: "brown"
  },
  {
    name: "ricks",
    hairColor: "hint of blonde"
  }
]


students.push({ name: "nate" })
let nate = students.find(student => student.name == "nate")
// let nate = students.find(function(student){ 
//   return student.name == "nate"
// })

nate.hairColor = "brown"

for (let index = 0; index < students.length; index++) {
  let student = students[index]
  console.log(student.hairColor)
}

console.log(students)


let word = "Hello"

for (let index = 0; index < word.length; index++) {
  let letter = word[index];

}


// i want to count from 1 to 100
for (let count = 1; count <= 100; count++) {
  console.log(count)
}

let num = 1

while (num < 11) {
  console.log(num)
  num++
}


let number = 1

do {
  console.log(number)
  number++
} while (number < 0);


// NOTE
// we want to be able to greet a particular student found in the array by using their name with a generic greeting or a custom one they want to use

function greetStudent(studentName, greeting = "Hello, ") {
  let foundStudent = students.find(student => student.name.toLowerCase() == studentName.toLowerCase())
  if (!foundStudent) {
    console.log("There is no such student by that name.")
    return
  }
  console.log(greeting + foundStudent.name[0].toUpperCase() + foundStudent.name.split("").splice(1).join(""))
}


// foundStudent = { name: "robet"}

// foundStudent.name.split("") => ["r", "o", "b", "e", "t"]
// .splice(1) start at index 1 and take all the remaining elements = > ["o", "b", "e", "t"]
// join("") => ["o", "b", "e", "t"] = > "obet"

// foundStudent.name[0].toUpperCase() => R 