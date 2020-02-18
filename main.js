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
function ciEmailify(name) {
  let answer = '';
  for (let i = 0; i < name.length; i++){
    if(name[i] === ' '){
      answer = answer + '.';
    }else {
      answer = answer + name[i];
    }
  }
  return answer.toLowerCase() + '@codeimmersives.com';
}

function exclaim(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++){
    if (str[i] === '?' || str[i] === '.'){
      answer = answer + "!";
    } else {
      answer = answer + str[i];
  }
}
return answer;
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