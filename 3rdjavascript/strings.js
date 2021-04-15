const testCase = 'teeeeeeeeeeessteeeeedaaaaaaa';

function findMostRepeatedLetter(word) {
    let mostRepeatedLetter = '';
    let mostRepeatedLetterCount = 0;
    let currentLetter = '';
    let currentCount = 0;
    const letterArray = word.split("");
    for (let i = 0; i < letterArray.length; i++) {
        const letter = letterArray[i];
        if (currentLetter != letter) {
            currentLetter = letter;
            currentCount = 1;
        } else {
            currentCount++;
        }
        if (mostRepeatedLetterCount < currentCount) {
            mostRepeatedLetter = currentLetter;
            mostRepeatedLetterCount = currentCount;
        }
    }  
    return `Najczesciej powtarzajaca sie litera to ${mostRepeatedLetter} i wystepuje ${mostRepeatedLetterCount} razy`;
}

console.log(findMostRepeatedLetter(testCase));