// Strings in JS are immutable → methods return new strings.
// Strings are immutable to improve performance, ensure safety, and allow engine-level optimizations.

let name = "Javascript is good language.";

console.log(name.length);

console.log(name.toLowerCase);
console.log(name.toUpperCase());

console.log(name.trim());

console.log(name.includes("is"));

console.log(name.startsWith("Java"));
console.log(name.endsWith("language"));


console.log(name.split(" "));

console.log(name.split(" ").join(" "))


console.log("hi hi".replace("hi", "hello")); 
console.log("hi hi".replaceAll("hi", "hello"));


// indexOf() / lastIndexOf()    = returnn -1 if not found
console.log("banana".indexOf("a"));     
console.log("banana".lastIndexOf("a"));


console.log("JavaScript".slice(0, 4));

console.log("JavaScript".substring(4, 10));  // no negative index





