const num=document.getElementById("num");
const rndNum=document.createElement("div");

document.body.appendChild(rndNum)

const createRandNum=()=>{
    return Math.floor(Math.random()*parseInt(num.value));
}

setInterval(()=>{
    rndNum.innerHTML=createRandNum();
},1000)

const createRandColor=()=>{
    let x=Math.floor(Math.random()*(255-0+1)+0)
    let y=Math.floor(Math.random()*(255-0+1)+0)
    let z=Math.floor(Math.random()*(255-0+1)+0)
    return `rgb(${x},${y},${z})`;
}

setInterval(()=>{
    document.body.style.background=createRandColor();
},1000)