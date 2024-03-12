// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
    return str.endsWith(ending);
  }

//   The endsWith() method checks whether a string ends with the characters of a specified string, returning true or false as appropriate.
//   The function simply returns the result of str.endsWith(ending), which will be true if str ends with ending and false otherwise