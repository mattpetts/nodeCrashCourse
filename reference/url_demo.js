const url = require('url');
const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active');

// Get serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Get the Host
console.log(myUrl.host)

// Get the Hostname (dosn't include port)
console.log(myUrl.hostname)

// Get pathname
console.log(myUrl.pathname)

// Get Serialized Query Params
console.log(myUrl.search)

// Get params as an Object
console.log(myUrl.searchParams)

// add a param dynamically
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))