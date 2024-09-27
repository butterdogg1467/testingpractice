
function reverseString(str) {
    let arr = Array.from(str)
    let arrReversed = arr.reverse()
    let reversedStr = arrReversed.join("")
    return reversedStr
}

module.exports = reverseString