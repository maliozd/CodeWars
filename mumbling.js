console.log(accum('qwErTy'))

function accum(inputString) {
    let outputArray = [];
    for (let i = 0; i < inputString.length; i++) {
        outputArray.push(formatLetter(inputString[i], i + 1))
    }
    return outputArray.join(',')
}

function formatLetter(stringWord, indexNum) {
    let word = stringWord.toUpperCase();

    while (word.length !== indexNum) {
        word += stringWord.toLowerCase();
    }
    return word
}




function accum(s) {
    const result = []
    const lowerStr = s.toLowerCase()
  
    for(let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase()
      for(let j = 0; j < i; j++) {
        str += lowerStr[i]
      }
      result.push(str)
    }
  
    return result.join("-")
  }