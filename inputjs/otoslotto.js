import readline from 'readline';

function getOtosLotteryNumbers() {
const lottoszamok=[];
for(let i=0;i<5;i++){
    let x=Math.round(Math.random()*(90-1)+1,0);
    if(lottoszamok[i-1]==x){
        let y=Math.round(Math.random()*(90-1)+1,0);
        lottoszamok.push(y);
    }
    else{
        lottoszamok.push(x)
    }
    
}
return lottoszamok
}

let szamok = getOtosLotteryNumbers();
console.log("1. feladat")
for(let i=0;i<5;i++){
    console.log(szamok[i]);
}
function getSortedtLotteryNumbers(){
    let y=getOtosLotteryNumbers()
    y.sort((a,b)=>a-b);
    for(let i=0;i<5;i++){
    
}
return y;
}
let sorbarakott=getSortedtLotteryNumbers();
console.log("2. feladat")
for(let i=0;i<5;i++){
    console.log(sorbarakott[i]);
}


