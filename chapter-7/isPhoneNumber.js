// code example without using regexes
function isPhoneNumber(text) {
    const numberSet = new Set(['0','1','2','3','4','5','6','7','8','9'])
    
    if (text.length !== 12) return false

    for (let i = 0; i < 3; i++) {
        if (!numberSet.has(text[i])) {
            return false
        }
    }

    if (text[3] !== '-') return false

    for (let i = 4; i < 7; i++) {
        if (!numberSet.has(text[i])) {
            return false
        }
    }

    if (text[7] !== '-') return false
    

    for (let i = 8; i < 12; i++) {
        if (!numberSet.has(text[i])) {
            return false
        }
    }

    return true
}

// console.log('Is 415-555-4242 a phone number?')
// console.log(isPhoneNumber('415-555-4242'))
// console.log('Is Moshi Moshi a phone number?')
// console.log(isPhoneNumber('Moshi Moshi'))

const message = 'Call me at 415-555-1011 tomorrow. 415-555-9999 is my office.'
for (let i = 0; i < message.length; i++) {
    const chunk = message.substring(i, i+12)
    //console.log(chunk)
    if (isPhoneNumber(chunk)) {
        console.log('Phone number found: ' + chunk)
    }
}
console.log('Done')