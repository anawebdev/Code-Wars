function list(names){
    var str="";
  for(i=0;i<names.length-2;i++){
      str=str + names[i].name+", ";
  }
  str= str + names[names.length-2].name + " & " + names[names.length-1].name;
  return str;
}
