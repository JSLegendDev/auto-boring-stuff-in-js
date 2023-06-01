// The caret and dollar sign characters
// ^ means a match must occur at the beginning
const beginWithHello = /^Hello/
console.log('Hello, World!'.match(beginWithHello))

const endWithNumber = /\d$/
console.log('Your number is 42'.match(endWithNumber))
console.log('Your number is forty two.'.match(endWithNumber))

const wholeStringIsNum = /^\d+$/
console.log('1234567890'.match(wholeStringIsNum))
console.log('12345xyz67890'.match(wholeStringIsNum))
console.log('12 34567890'.match(wholeStringIsNum))

// The wildcard character
// . is called wildcard and will match every character
// except a newline
const atRegex = /.at/g
console.log(
    ...'The cat in the hat sat on the flat mat.'
    .matchAll(atRegex)
)

const nameRegex = /First Name: (.*) Last Name: (.*)/
const matchObject = 'First Name: Al Last Name: Sweigart'.match(nameRegex)
console.log(matchObject)
console.log(matchObject[1])
console.log(matchObject[2])

// .* is greedy by default. Use ? to make it non-greedy.
const nonGreedyRegex = /<.*?>/
console.log('<To serve man> for dinner.>'.match(nonGreedyRegex))

const greedyRegex = /<.*>/
console.log('<To serve man> for dinner.>')

// Matching newlines with the dot character by using the s flag.
const text = 'Serve the public trust.\nProtect the innocent.\nUphold the law.'
console.log(text.match(/.*/))
console.log(text.match(/.*/s))

// Case insensitive matching
const robocop = /robocop/i
console.log('ROBOCOP protects the innocent.'.match(robocop))

// Substituting strings with the subs() method
const namesRegex = /Agent \w+/g
console.log(
    'Agent Alice gave the secret documents to Agent Bob.'
    .replace(namesRegex, 'CENSORED')
)

const agentNamesRegex = /Agent (\w)\w*/g
console.log(
    'Agent Alice told Agent Carol that Agent Eve knew Agent Bob was a double agent.'
    .replace(agentNamesRegex, '$1****')
)