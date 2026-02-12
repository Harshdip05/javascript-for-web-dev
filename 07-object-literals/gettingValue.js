// hame particular key ki value ko print karwana hai

const post ={
    username:"Harsh05",
    content:"This is my #1 post",
    likes:150,
    repost:10,
    tags:["delta","omega"]
}

console.log(post)

console.log(post["username"])   // bracket notation
console.log(post["tags"])

console.log(post.username)      // dot notation
console.log(post.tags)


// console.log(post[username]) username is not defined (reference error)
// console.log(post."username")  unexpected string (syntax error)


console.log(post.tags[0]);



let prop = "repost";
console.log(post[prop])