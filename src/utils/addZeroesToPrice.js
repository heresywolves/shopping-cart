function addZeroesToPrice(num) {
  // Returns a string of the num with added 0 to the price decimals if needed
  let value = num.toString();      
  var res = value.split(".");     

  if (res.length == 1) {
    return res + '.00';
  } 

  if (res[1].length < 2) { 
    return res[0] + '.' + res[1] + '0';
  }

  return value;
}

export default addZeroesToPrice;