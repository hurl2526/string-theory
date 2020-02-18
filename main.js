function crazyCase(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++){
  if(i % 2 !== 0){
  answer = answer + str[i].toUpperCase();
} else {
  answer = answer + str[i].toLowerCase();
}
}
return answer;
}
function ciEmailify() {
}

function exclaim() {
}

function reverse() {
}

function crazyCase2ReturnOfCrazyCase() {
}

function titleCase() {
}

function onlyVowels() {
}

function crazyCase3SonOfCrazyCase() {
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}