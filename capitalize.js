
function capitalize(str) {
    let slicedFull = str.slice(1)
    let slicedOne = str.slice(0, 1)
    let cap = slicedOne.toUpperCase()
    let final = cap + slicedFull
    return final
}

    
module.exports = capitalize




