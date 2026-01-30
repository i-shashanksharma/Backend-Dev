function capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function countVowels(str) {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}

module.exports = {
    capitalize,
    reverse,
    countVowels
};
