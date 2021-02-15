let str = 'abcdefgh';

const positionOfRegex = str.match(/cde/);
const indexOfRegex = str.search(/cde/);
console.log(indexOfRegex); // indexOfRegex === postionOfRegex.index

const inString = str.includes('cde'); // true
const substr = str.substr(0, 3); // 'abc'.  start at 0 and give me a length of 3.
const substring = str.substring(2, 3); // 'c'. string from start index to end index exclsive

const stringWithoutWhitespace = ' ac b      '.trim(); // 'ac b'

console.log(substring);


console.log(str);

/* String methods

str.charAt(index);
str.concat(str1, str2);
str.replace(strOrRegexToInsert, strToReplace);

str.slice(fromIndex, toIndex) -> returns a new string, doesnt modify old string
str.substring(fromIndex, toIndex) -> returns a new string between from and to 
str.valueOf() returns the primitive value of a New String() object. 
*/ 

