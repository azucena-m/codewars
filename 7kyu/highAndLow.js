// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//my solution
function highAndLow(numbers){
    // ...
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
  }

//   The numbers variable is initially a string, as indicated by the split(' ') method call, which splits the string into an array of substrings separated by spaces.

// The spread operator ... is then used within the Math.max and Math.min functions. The spread operator allows an expression to be expanded in places where multiple arguments or elements are expected.

// Math.max and Math.min are functions that accept multiple arguments and return the maximum and minimum values, respectively. By using the spread operator, the elements of the numbers array are passed as individual arguments to these functions.

// The Math.max(...numbers) expression finds the maximum value among the elements of the numbers array, and Math.min(...numbers) finds the minimum value.

// Finally, the ${} template literal syntax is used to concatenate the maximum and minimum values into a single string, separated by a space.