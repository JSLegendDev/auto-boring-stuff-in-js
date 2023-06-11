//Managing complex Regex
const patterns = [
  /(\d{3}|\(\d{3}\))?/, // area code
  /(\s|-|\.)?/, // separator
  /\d{3}/, // first 3 digits
  /(\s|-|\.)/, // separator
  /\d{4}/, // last 4 digits
  /(\s*(ext|x|ext.)\s*\d{2,5})?/ // extension
]

const finalRegex = new RegExp(`(${patterns.map(regex => regex.source).join('')})`, 'g')
console.log(finalRegex.source)

const text = `
800-420-7240
415-863-9900
415-863-9950
info@nostarch.com
media@nostarch.com
academic@nostarch.com
info@nostarch.com
`

console.log(text.match(finalRegex))
