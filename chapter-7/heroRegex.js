// Matching multiple groups with the Pipe
const heroRegex = /Batman|Tina Fey/
const matchObject1 = 'Batman and Tina Fey'.match(heroRegex)
console.log(matchObject1)

const matchObject2 = 'Tina Fey and Batman'.match(heroRegex)
console.log(matchObject2)

const batRegex = /Bat(man|mobile|copter|bat)/
const matchObject3 = 'Batmobile lost a wheel'.match(batRegex)
console.log(matchObject3)

// Optional matching with question mark
const batRegex2 = /Bat(wo)?man/
const matchObject4 = 'The Adventures of Batman'.match(batRegex2)
console.log(matchObject4)

const matchObject5 = 'The Adventures of Batwoman'.match(batRegex2)
console.log(matchObject5)

// Matching a phone number that doesn't have a regional code
const phoneRegex = /(\d\d\d-)?\d\d\d-\d\d\d/
let phoneMatchObject = 'My number is 415-555-4242'.match(phoneRegex)
console.log(phoneMatchObject[0]) // should print : 415-555-4242
phoneMatchObject = 'My number is 555-4242'.match(phoneRegex)
console.log(phoneMatchObject[0]) // should print : 555-4242

// If you need to match for ? in the string escape it like so \?

// Matching zero or more with the star