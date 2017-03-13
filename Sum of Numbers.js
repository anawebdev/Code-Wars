function GetSum( a,b ){
    if(a==b) return a;
    var total=0;
    if(a<b){
        for(i=a;i<=b;i++){
            total += i;
        }} else {
            for(i=a;i>=b;i--){
                total += i;
            }
        }
    return total;
}
