const set = new Set([1, 2, 3]);

set.add(4);
set.add(4); // Ignores duplicate values
console.log(set.has(4))
set.delete(3);
set.add(set.size);
// set.clear(); Clears everything

for (const item of set) {
    console.log(item)
}