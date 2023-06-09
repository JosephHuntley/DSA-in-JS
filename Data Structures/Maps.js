const map = new Map([['a', 1], ['b', 2]]) // [Key, value]
map.set('c', 3);
console.log(map.has('c'));
console.log(map.size);
map.delete('c');
// map.clear(); Clears the entire map

for (const [key, value] of map) (
    console.log(`${key}: ${value}`)
)