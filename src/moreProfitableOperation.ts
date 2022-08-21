const moreProfitableOperation = (stringOfNumbers: string) => {
    const arrayOfNumbers = convertToArrayOfNumbers(stringOfNumbers)
    const profitResult = findBiggerProfit(arrayOfNumbers)

    return profitResult
}

const convertToArrayOfNumbers = (stringOfNumbers: string) => 
    stringOfNumbers
        .split(/[,.\s]/)
        .map(stringOfNumber => Number(stringOfNumber))


const  findBiggerProfit = (arrayOfNumbers: Array<number>) => {
    const arraySize = arrayOfNumbers.length
    let maxProfit = arrayOfNumbers[1] - arrayOfNumbers[0]

    for (let i = 0; i < arraySize; i++) {
        for (let j = i + 2; j < arraySize; j++){
            if(arrayOfNumbers[j] - arrayOfNumbers[i] > maxProfit)
            maxProfit = arrayOfNumbers[j] - arrayOfNumbers[i]
        }
    }

    if (maxProfit <= 0){
        return 0
    }

    return maxProfit
} 

const exampleOne = "7,1,5,3,6,4"
const first = moreProfitableOperation(exampleOne)
console.log(`Example #1: ${first}`)

const exampleTwo = "7,6,4,3,1"
const second = moreProfitableOperation(exampleTwo)
console.log(`Example #2: ${second}`)
