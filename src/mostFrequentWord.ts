const mostFrequentWord = (paragraph: string, forbiddenWords: Array<string>) => {
    const formatted = formattedArrayWithoutForbiddenWords(paragraph, forbiddenWords)
    const arrayWithRepeatedWords = findRepeatedWords(formatted)
    const result = findMostRepeatedWords(arrayWithRepeatedWords)

    return result
}

const formattedArrayWithoutForbiddenWords = (paragraph: string, forbiddenWords: Array<string>): Array<string> => 
    paragraph
        .split(/[,.\s]/)
        .map(word => {
            const lowerCaseWord = word.toLowerCase()
            const isForbideenWord = forbiddenWords.includes(lowerCaseWord)
            if(!isForbideenWord){
                return lowerCaseWord
            }
            return ''
}).filter(Boolean)

const findRepeatedWords = (arrayOfWords: Array<string>): Array<string> => {
    const arrayWithRepeatedWords = arrayOfWords.filter((word, index) => 
        arrayOfWords.indexOf(word) !== index);

    if(!arrayWithRepeatedWords.length){
        return arrayOfWords
    }
    return arrayWithRepeatedWords
}


const findMostRepeatedWords = (arrayOfRepeatedWords: Array<string>): Array<string> => {
    let maxCount: number = 0
    let maxWord: Array<string> = []

    arrayOfRepeatedWords.forEach(word => {
        let quantityOfRepeatedWord = arrayOfRepeatedWords.filter(wordCompare => wordCompare === word).length

        if(quantityOfRepeatedWord > maxCount) {
            maxCount = quantityOfRepeatedWord
            maxWord.length = 0
            maxWord.push(word)
        }else if(quantityOfRepeatedWord === maxCount) {
            maxWord.push(word)
        }
    })

    return maxWord
}

const paragraph = "Bob hit a ball, the hit BALL flew long after it was hit."
const forbiddenWords = ['hit']

const resultOne = mostFrequentWord(paragraph, forbiddenWords)
console.log(`Example #1: ${resultOne}`)

const paragraph1 = "a."
const forbiddenWords1: [] = []

const resultTwo = mostFrequentWord(paragraph1, forbiddenWords1)
console.log(`Example #2: ${resultTwo}`)