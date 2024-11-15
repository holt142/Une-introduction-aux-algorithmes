let mounths = ['January','February','March','April','May','June','July','August','September','October','November','December']
function cheackseason(mounth){
    if(mounth == mounths[0] || mounth == mounths[11] ||  mounth == mounths[2] ){
        return 'winter'
    }
    for (i=2; i<=4; i++){
        if(mounth == mounths[i]){
            return 'spring'
        } 
    }
    for (i=5; i<=7; i++){
        if(mounth == mounths[i]){
            return 'summer'
        }
    }
    for (i=8; i<=4; i++){
        return 'fall'
    }
}

console.log(cheackseason('September'))

