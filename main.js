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

function reverse(name) {
  let answer = '';
  for (let i = name.length - 1; i >= 0; i = i - 1){
    answer = answer + name[i];
  }
return answer;
}
function crazyCase2ReturnOfCrazyCase(str) {
let answer = '';
let counter = 1;
  for (let i = 0; i < str.length; i++){
  if (str[i] !== ' '){
      counter++;
    }
  if(counter % 2 !== 0){
      answer = answer + str[i].toUpperCase();
} else {
      answer = answer + str[i].toLowerCase();
    }
  }
  return answer; 
}


function titleCase(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++){
    if (str[i -1]=== ' ' || i === 0){
    answer = answer + str[i].toUpperCase();
  }
  else {
    answer = answer + str[i].toLowerCase();
  }
}
return answer;
}

function onlyVowels(words) {
let answer = '' 
  for (i = 0; i <= words.length; i++) {
    if ('aeiouAEIOU'.includes(words[i])) {
      answer = answer + words[i];}
}
return answer;
}

function crazyCase3SonOfCrazyCase(str) {
  let answer = '';
let counter = 1;
  for (let i = 0; i < str.length; i++){
  if (!' ,!?.0123456789@#$%^&*()'.includes(str[i])){
      counter++;
    }
  if(counter % 2 !== 0){
      answer = answer + str[i].toUpperCase();
} else {
      answer = answer + str[i].toLowerCase();
    }
  }
  return answer; 
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