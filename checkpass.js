const checkpass=(str)=>{
    var hilangstring=str.replace(' ','')
    if(hilangstring.length>=6){
        var huruf=false
        var angka=false
        for(var i=0;i<hilangstring.length;i++){
            if(hilangstring[i]>=0){
                angka=true
            }else{
                huruf=true
            }
        }

        if(angka&&huruf){
            return 'pass berhasil'
        }else if(huruf){
            return 'harus ada angka'
        }else{
            return 'harus ada huruf'
        }


    }else{
        return 'Character kurang dari 6'
    }
}

console.log(checkpass('12s123'))
console.log(checkpass('abcabc'))
console.log(checkpass('32423424'))
console.log(checkpass('ab 123'))