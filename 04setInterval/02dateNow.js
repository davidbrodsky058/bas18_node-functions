function f(){
    console.log("start");
    console.log(new Date());
    console.log("end");
}
// f();
function t(){
    console.log("start");
    setTimeout(()=>{
        console.log(new Date());
    },3000)
}
// t();
function myRandom(){
    console.log(Math.floor(Math.random()*10+1))
}
setTimeout(myRandom,3000);
setTimeout(myRandom,5000);
setTimeout(myRandom,7000);
