const obj = {
    name: "bruce",
    age: 25,
    "key-three": 3,
    sayMyName: function () {
        console.log(this.name)
    }
}

console.log(obj) 
console.log(obj.name) // O(n)
console.log(obj['age'])
console.log(obj["key-three"])

obj.hobby = "football";
obj["gender"] = "male";

console.log(obj)

delete obj.gender // O(1)
obj.sayMyName()
console.log(Object.keys(obj)) // O(n)
console.log(Object.values(obj)) // O(n)
console.log(Object.entries(obj)) // O(n)