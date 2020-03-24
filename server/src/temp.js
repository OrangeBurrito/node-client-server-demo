let person = {
	name: 'nord',
	age: 22,
	gender: 'unspecified',
	mood: 'neutral'
}

let [name, age, gender, mood] = Object.values(person)

console.log(`${name} is ${mood} and ${age} years old`)

let numbers = [45,65,19,99]

let [a,b] = numbers