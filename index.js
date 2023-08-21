
//ONLY ODDS
// function filterOddNumbers(numbers) {
//     const oddNumbers = numbers.filter(num => num % 2 !== 0);
//     return oddNumbers;
// }
// const originalArray = [1, 2, 3, 4, 5, 6];
// const oddArray = filterOddNumbers(originalArray);
// console.log(oddArray); 


//vowels and cons
// function countVowelsAndConsonants(word) {
//     const vowels = "aeiou";
//     let vowelCount = 0;
//     let consonantCount = 0;

//     for (let char of word) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         } else if (char >= 'a' && char <= 'z') {
//             consonantCount++;
//         }
//     }

//     console.log(`Word: ${word}`);
//     console.log(`Vowels: ${vowelCount}`);
//     console.log(`Consonants: ${consonantCount}`);
// }
// countVowelsAndConsonants("apple"); 


//REVERSE LOOP 


// function reverseArray(originalArray) {
//     let reversedArray = [];
    
//     for(let i = originalArray.length - 1; i >= 0; i--) {
//         reversedArray.push(originalArray[i]);
//     }

//     return reversedArray;
// }
// const myArray = [1, 2, 3, 4, 5];
// const myReversedArray = reverseArray(myArray);
// console.log(myReversedArray); 

//FIZZ BUZZ

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
