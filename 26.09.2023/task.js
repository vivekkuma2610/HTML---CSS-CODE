// Sample array for testing
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// a. Print odd numbers in an array using IIFE
(function() {
  console.log("a. Odd numbers in the array:");
  array.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})();

// b. Convert all strings to title caps in a string array using IIFE
(function() {
  const stringArray = ['hello world', 'javascript is awesome'];
  const titleCapsArray = stringArray.map((str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
  console.log("\nb. String array with titles caps:");
  console.log(titleCapsArray);
})();

// c. Sum of all numbers in an array using IIFE
(function() {
  const sum = array.reduce((acc, num) => acc + num, 0);
  console.log("\nc. Sum of array elements:", sum);
})();

// d. Return all prime numbers in an array using IIFE
(function() {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  const primeArray = array.filter((num) => isPrime(num));
  console.log("\nd. Prime numbers in the array:", primeArray);
})();

// e. Return all palindromes in an array using IIFE
(function() {
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }

  const strArray = ['level', 'hello', 'world', 'madam'];
  const palindromeArray = strArray.filter((str) => isPalindrome(str));
  console.log("\ne. Palindromes in the array:", palindromeArray);
})();

// f. Return median of two sorted arrays of the same size using IIFE
(function() {
  function findMedianSortedArrays(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const len = merged.length;
    const mid = Math.floor(len / 2);
    if (len % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  }

  const nums1 = [1, 3];
  const nums2 = [2, 4];
  const median = findMedianSortedArrays(nums1, nums2);
  console.log("\nf. Median of two sorted arrays:", median);
})();

// g. Remove duplicates from an array using IIFE
(function() {
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = [...new Set(arrayWithDuplicates)];
  console.log("\ng. Unique array:", uniqueArray);
})();

// h. Rotate an array by k times using IIFE
(function() {
  function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return [...arr.slice(n - k), ...arr.slice(0, n - k)];
  }

  const rotated = rotateArray(array, 3);
  console.log("\nh. Rotated array:", rotated);
})();



