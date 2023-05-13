const text = 'My number is 415-555-4242.'
const phoneNumberRegex = new RegExp(/\d\d\d-\d\d\d-\d\d\d\d/) 
// alternative is to provide the RegExp directly without the constructor.
// Use the constructor if the RegExp is going to change dynamically later
// on in your program. 
// search function is good for a single match only
// const matchIndex = text.search(phoneNumberRegex)
// console.log('Phone number found: ' + text.substring(matchIndex))

//Better and closer in behavior to the python example in the book
const matchObject = text.match(phoneNumberRegex)
console.log('Phone number found: ' + matchObject[0])

const newPhoneNumberRegex = /(\d\d\d)-(\d\d\d-\d\d\d)/
const newMatchObject = text.match(newPhoneNumberRegex)
console.log(newMatchObject[0])
console.log(newMatchObject[1])
console.log(newMatchObject[2])
console.log(newMatchObject)