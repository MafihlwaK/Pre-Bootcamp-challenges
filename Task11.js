function findCommonLetters(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let commonLetters = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${commonLetters}`);
}

findCommonLetters('house', 'computers');