import clipboard from 'clipboardy'

// Project: Phone Number and Email Address Extractor 

const phonePatterns = [
    /(\d{3}|\(\d{3}\))?/, // area code
    /(\s|-|\.)?/, // separator
    /\d{3}/, // first 3 digits
    /(\s|-|\.)/, // separator
    /\d{4}/, // last 4 digits
    /(\s*(ext|x|ext.)\s*\d{2,5})?/ // extension
]

const phoneRegex = new RegExp(`(${phonePatterns.map(regex => regex.source).join('')})`, 'g')

const emailPatterns = [
    /[a-zA-z0-9._%+-]+/, // username
    /@/, // @ symbol
    /[a-zA-Z0-9.-]+/, // domain name
    /(\.[a-zA-Z]{2,4})/ // dot-something
]

const emailRegex = new RegExp(`(${emailPatterns.map(regex => regex.source).join('')})`, 'g')

const text = clipboard.readSync()


const matches = []

let phoneMatches
let emailMatches
if (text !== '') {
    phoneMatches = text.match(phoneRegex)
    emailMatches = text.match(emailRegex)
}

if (phoneMatches) {
    matches.push(...phoneMatches)
}

if (emailMatches) {
    matches.push(...emailMatches)
}   

if (matches.length > 0) {
    const content = `Copied to clipboard:\n${matches.join('\n')}`
    clipboard.writeSync(content)
    console.log(content)
} else {
    console.log('No phone numbers or email addresses found.')
}