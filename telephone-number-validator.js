function telephoneCheck(str) {
  let formatChecker = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm 
  if( formatChecker.test(str) == 1) {
    return true
  } else {
    return false
  }
}

console.log(telephoneCheck("155-555-5555"));