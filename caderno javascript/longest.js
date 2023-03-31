


function findLongestWordLength(str) {
    
  let arrStr = str.split(" ");
  let newArray = [];

  for(let i = 0; i < arrStr.length; i++){
    newArray.push(arrStr[i]);
  }

  const find = (arr) => {
      let word = "";
      for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
          word = arr[i];
        }
      }
      return word;
    }

    console.log(find(newArray));
  }

  


findLongestWordLength("The quick brown fox jumped over the lazy dog");