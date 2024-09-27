
function analyzeArray(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let min = sorted[0]
    let maxIndex = sorted.length - 1
    let max = sorted[maxIndex]
    let length = sorted.length
    
    let initialValue = 0
    let sum = sorted.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    )

    let average = sum / length

    return {
        min: min,
        max: max,
        length: length,
        average: average
    }
}

module.exports = analyzeArray