let input = new Int8Array();

function loadFile() {
    let fs = require("fs");
    let text = fs.readFileSync("input.txt").toString('utf-8');
    input = text.split("\n").map(Number);
}

loadFile();

const sumTwoNumbers = () => {
    let complement = []
    for(let number of input) {
        complement[number] = true
        toFind = 2020 - number
        if(complement[toFind]){
            console.log(number * toFind)
            break
        }
    }
}

const sumThreeNumbers = () => {
    for(let numberA of input) {
        for(let numberB of input) {
            for(let numberC of input) {
                if((numberA + numberB + numberC) === 2020 && numberA != numberB && numberA != numberC && numberB != numberC) {
                    console.log(numberA * numberB * numberC)
                }
            }
        }
    }
}

sumTwoNumbers()
sumThreeNumbers()