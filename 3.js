input =	[2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11];

const showBubbleShort = document.getElementById("show-bubble-short")
const showEven = document.getElementById("show-even")
const showOdd = document.getElementById("show-odd")


function bubbleSort(input,curr){
  if(curr==input.length){
  return input;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i + 1]) {
      let newvar = input[i];
      input[i] = input[i + 1];
      input[i + 1] = newvar;
    }
  }
  return bubbleSort(input,curr+1);

 }

showBubbleShort.innerHTML = bubbleSort(input, 0)
 
const result = input.filter(a => a % 2 == 0);
evenResult = result.join(" ")
showEven.innerHTML = evenResult

const oddResult = input.filter(a => a % 2 == 1);
resultOdd = oddResult.join(" ")
showOdd.innerHTML = resultOdd;

  




// function oddEven(){
//   input =	[2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11];
//   let even = ""
//   let odd = ""

//   for(let i = 1; i<= input.length; i++){
//     if (input[i]%2 == 0){
//       even += `${i} `

//     } else {
//       odd += `${i} `
//     }
//   }
//   console.log(even)
//   console.log(odd)
// }

// console.log(oddEven())