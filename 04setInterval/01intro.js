function test(){
    console.log("hello world");
    
}

// setInterval(test,1000)

function f(){
    let n=0;
    setInterval(()=>{
        n++;
        console.log(n);
        
    },1000)
}
// f();

const clock =()=>{
    let sec=0,min=0,hour=0;
    setInterval(()=>{
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
        if(min==60){
            min=0;
            hour++;
        }
        if(hour==24){
            hour=0;
        }
        console.log(hour+":"+min+":"+sec);
        
    },1000)
}
clock();