function mult(a,b){
    return a*b;
}

function sum(a,b){
    return a+b;
}

function reduce(a,b){
    return a-b;
}

function compute(callback){
    let sol = callback(9,7);
    console.log(sol);
}

compute(mult)
compute(sum)
compute(reduce)