module.exports = function check(str, bracketsConfig) {
  let flag, firstBracket = false;
  const stack = [];

  flag = (str.length%2 == 0);

  if(flag) {
    for(let j=0; j<bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] == str[0]) { 
        firstBracket = true;
        break;
      }
    }
  }else{
    return false;
  }

  if(firstBracket) {
    for(let i=0; i<str.length; i++) {
      for(let j=0; j<bracketsConfig.length; j++) {
        // code
      }
    }
  }else{
    return false;
  }


 

 

  
 

}
