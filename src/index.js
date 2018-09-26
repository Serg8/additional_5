module.exports = function check(str, bracketsConfig) {
    let flag, fl = false, firstBracket = false;
    const arr = [];

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
        arr.push(str[i]);
      } 
      for(let i=0; i<arr.length; i++) {
        for(let j=0; j<bracketsConfig.length; j++) {
          if((arr[i] == bracketsConfig[j][1]) && (bracketsConfig[j][0] != bracketsConfig[j][1]) ) {
            if(arr[i-1] == bracketsConfig[j][0]) {
                arr.splice(i-1, 2);
                i -= 2;
                break;
            }else{
                return false;
            }
          }
          if((arr[i] == bracketsConfig[j][1]) && (bracketsConfig[j][0] == bracketsConfig[j][1]) ) {
            if((arr[i-1] == bracketsConfig[j][1]) && fl ) {
              arr.splice(i-1, 2);
                i -= 2;
                break;
            }
            fl = true;
          }
        } 
      } 
      if(arr.length == 0) {
        return true;
      }else{
        return false;
      }
  }else{
    return false;
  }
} 
