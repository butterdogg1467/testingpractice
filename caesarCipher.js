

function caesarCipher(str, shift) {
    let finalArr = []
    let finalString;
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i)
        let shifted
        if (ascii >= 97 && ascii <= 122 || ascii >= 65 && ascii <= 90) {
            if (ascii === 120) {
                shifted = 97
            } else if (ascii === 121) {
                shifted = 98
            } else if (ascii === 122) {
                shifted = 99
            } else if (ascii === 88) {
                shifted = 65
            } else if (ascii === 89) {
                shifted = 66
            } else if (ascii === 90) {
                shifted = 67
            } else {
                shifted = ascii + shift
            }
        } else {
            finalArr.push(str[i])
            continue
        }
            
        let shiftedToChar = String.fromCharCode(shifted)
        finalArr.push(shiftedToChar)
    }
    finalString = finalArr.join("")
    return finalString
}


module.exports = caesarCipher


