function isTriangle(a,b,c){
    var arr=[a,b,c].sort();
    if(arr[2]>arr[0]+arr[1]) {return true;
    }else {
        return false;
    }
   
}
