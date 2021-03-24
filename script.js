var input = 'turpentine and turtles';
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var resultArray = [];

for (let i = 0; i < input.length; i++){
  // console.log(i);
  for (let j = 0; j < vowels.length; j++){
    // console.log(j);
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
      if (input[i] === "e" || input[i] === "u" || input[i] === "E" || input[i] === "U"){
        resultArray.push(input[i]);
      }
    }
  }
};
console.log(resultArray.join('').toUpperCase());
