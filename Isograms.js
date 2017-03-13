function isIsogram(str){
  if(str==="") {
    return true;
    }
  str=str.toUpperCase().split("").sort();
  for(i=1;i<str.length;i++){
    if(str[i]==str[i-1]){
      return false;
      }
  }
  return true;
}
