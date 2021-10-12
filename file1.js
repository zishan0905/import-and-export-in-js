const sum = (arr) => {
    let sm = 0
    for(let each of arr){
        sm +=  each
    }
    return sm
}

const mul = (arr) => {
    let m = 1;
    for(let each of arr){
        m *= each
    }
    return m
}


module.export = { sum , mul}