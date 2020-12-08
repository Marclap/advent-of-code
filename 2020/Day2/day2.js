let input = new Array()

function loadFile() {
    let fs = require("fs")
    let text = fs.readFileSync("input.txt").toString('utf-8')
    input = text.split("\n")
}

loadFile();

const policyPasswordRange = (password, letter, startRange, endRange) => {
    let count = 0
    password.split('').map(character => {
        count = (character === letter) ? count += 1 : count
    })
    return (count >= startRange && count <= endRange)
}

const policyPasswordExcatc = (password, startRange, endRange, letter) => {
    return (password[startRange - 1] === letter && password[endRange - 1] !== letter) || (password[startRange - 1] !== letter && password[endRange - 1] === letter)
}

const solution = () => {
    let valid = 0
    let validPolicy = 0
    for(let item of input) {
        let splitted = item.split(':')
        let policy = splitted[0]
        let password = splitted[1].trim()
        let ranges = policy.split(' ')[0]
        let startRange = Number(ranges.split('-')[0])
        let endRange = Number(ranges.split('-')[1])
        let letter = policy.split(' ')[1]
        valid = policyPasswordRange(password, letter, startRange, endRange) ? valid += 1 : valid
        validPolicy = policyPasswordExcatc(password, startRange, endRange, letter) ? validPolicy += 1 : validPolicy
    }
    console.log(valid)
    console.log(validPolicy)
}

solution()
