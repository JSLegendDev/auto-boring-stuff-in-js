// const complexRegex = new RegExp(
//     '((\d{3}|\(\d{3}\))?' +
//     '(\s|-|\.)?'+ 
//     '\d{3}' +
//     '(\s|-|\.)' + 
//     '\d{4}' +
//     '(\s*(ext|x|ext.)\s*\d{2,5})?)'
// )

// console.log(complexRegex)
// console.log(
//     `800-420-7240
//     415-863-9900
//     415-863-9950
//     info@nostarch.com
//     media@nostarch.com
//     academic@nostarch.com
//     info@nostarch.com`
//     .match(/((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)/)
// )

const pattern = new RegExp(`^          // Start of the pattern
  [A-Za-z]+    // Match one or more letters (case insensitive)
  \\s          // Match a single whitespace character
  \\d{2}       // Match exactly two digits
  $            // End of the pattern
`, 'x');

console.log(pattern.test("OpenAI 42"));  // Output: true
