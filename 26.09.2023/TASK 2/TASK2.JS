// Sample array for testing
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// a. Print odd numbers in an array using an arrow function
const printOddNumbers = (arr) => {
  console.log("a. Odd numbers in the array:");
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(array);

// b. Convert all strings to title caps in a string array using an arrow function
const titleCaseStrings = (arr) => {
  return arr.map((str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
};

const stringArray = ['hello world', 'javascript is awesome'];
const titleCapsArray = titleCaseStrings(stringArray);
console.log("\nb. String array with titles caps:");
console.log(titleCapsArray);

// c. Sum of all numbers in an array using an arrow function
const sumArray = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};

const sum = sumArray(array);
console.log("\nc. Sum of array elements:", sum);

// d. Return all prime numbers in an array using an arrow function
const primeNumbers = (arr) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  return arr.filter((num) => isPrime(num));
};

const primeArray = primeNumbers(array);
console.log("\nd. Prime numbers in the array:", primeArray);

// e. Return all palindromes in an array using an arrow function
const palindromes = (arr) => {
  const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  return arr.filter((str) => isPalindrome(str));
};

const strArray = ['level', 'hello', 'world', 'madam'];
const palindromeArray = palindromes(strArray);
console.log("\ne. Palindromes in the array:", palindromeArray);