const obj = {
    1:"a",
    2:"b",
    null:"c",
    undefined:"d",
    true:"e"
};

console.log(obj);

console.log(obj["1"])
console.log(obj[1])  // 1 is converted to "1"  // it is not an index

console.log(obj[null])  // null is read as "null" not as keyword null
console.log(obj["null"])


// console.log(obj.1)  //dot notation not able to read 1 as string
// console.log(obj."1")
console.log(obj.null)
// console.log(obj."null")



// keys dont come inside quotes