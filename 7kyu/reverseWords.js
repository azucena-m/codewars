// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//my solution
function reverseWords(str) {
    // split the words into two separate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
  }

//   str.split(""): This splits the input string str into an array of individual characters. Each character becomes an element in the array.

// .reverse(): This method reverses the order of elements in the array. Since the input string was split into characters, reversing the array effectively reverses the characters in the string.

// .join(""): This joins the reversed array of characters back into a single string. The empty string "" passed to the join method means that no separator should be added between the characters.

// .split(" "): This splits the reversed string by spaces, effectively splitting the reversed words into an array of words.

// .reverse(): This reverses the order of elements in the array of reversed words. This step brings the words back to their original order, but each word itself is still reversed.

// .join(" "): This joins the reversed words back into a single string, with spaces between them. This step effectively creates the final result, where the words are in their original order but each word is reversed.

