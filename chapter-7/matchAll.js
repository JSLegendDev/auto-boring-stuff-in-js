// The matchAll() method
// The g flag indicates that the regular expression should be tested against all possible matches in a string
let phoneNumberRegex = /\d\d\d-\d\d\d-\d\d\d\d/g
let text = 'Cell: 415-555-9999 Work: 212-555-0000'
// using match with a regex that has the global flag will return
// the same number of results than using matchAll. However, matchAll
// will provide capturing groups.
console.log(text.match(phoneNumberRegex))

const matchIterator = text.matchAll(phoneNumberRegex) 
console.log([...matchIterator])

phoneNumberRegex = /(\d\d\d)-(\d\d\d)-(\d\d\d\d)/g
console.log([...text.matchAll(phoneNumberRegex)])