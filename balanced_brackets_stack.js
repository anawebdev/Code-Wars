function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        console.log(balance(expression));
    }
   
    function balance(str){
        var stack=[];
        for(var i=0;i<str.length;i++){
            if(str[i]==='{' || str[i]==='[' || str[i]==='(' ){
                stack.push(str[i]);
            } else if (str[i]==='}'){
                if(stack.length===0){
                    return 'NO';
                };
                if(stack[stack.length-1]==='{'){
                    stack.pop();
                }
            } else if (str[i]===']'){
                if(stack.length===0){
                    return 'NO';
                };
                if(stack[stack.length-1]==='['){
                    stack.pop();
                }
            } else if (str[i]===')'){
                if(stack.length===0){
                    return 'NO';
                };
                if(stack[stack.length-1]==='('){
                    stack.pop();
                }
            }
        }
        
        if(stack.length===0) {
            return 'YES';
        } else return "NO";
    }
}
