const accum=(str='')=>{
    var output=''
    for(var i=0;i<str.length;i++){
        for(var j=0;j<=i;j++){
            if(j==0){
                output+=str[i].toUpperCase()
            }else{
                output+=str[i].toLowerCase()
            }
        }
        if(i<str.length-1){
            output+='-'
        }
    }
    return output
}

console.log(accum('abcd'))
console.log(accum('cwAt'))
console.log(accum('RqaEzty'))