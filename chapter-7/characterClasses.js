/* 
    Character classes
    \d Any numeric digit from 0 to 9.
    \D Any character that is not a numeric digit from 0 to 9.
    \w Any letter, numeric digit, or the underscore character.
    (Think of this as matching “word” characters.)
    \W Any character that is not a letter, numeric digit, or the
    underscore character.
    \s Any space, tab, or newline character. (Think of this as
    matching “space” characters.)
    \S Any character that is not a space, tab, or newline.
*/
const ingredientRegex = /\d+\s\w+/g
console.log(
    [
        ...'12 eggs, 7 carrots, 5 tomatoes, 4 cucumbers'
        .matchAll(ingredientRegex)
    ]
)

// Making your own character classes
const vowelRegex = /[aeiouAEIOU]/g
console.log(
    [
        ...'RoboCop eats baby food. BABY FOOD.'
        .matchAll(vowelRegex)
    ]
)

// negative character class
const consonantRegex = /[^aeiouAEIOU]/g
console.log(
    [
        ...'RoboCop eats baby food. BABY FOOD.'
        .matchAll(consonantRegex)
    ]
)