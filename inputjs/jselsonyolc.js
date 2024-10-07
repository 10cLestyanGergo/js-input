import input from "./input.js";

const valtozo=await input("Adjon meg egy txt változót: ");
let valtozo2="";
let valtozo3="";
//első feladat
console.log(valtozo.substring(0,5));
//második feladat
console.log(valtozo.substring(3,8));
//harmadik feladat
console.log(valtozo.substring(5,valtozo.length));
//negyedik feladat
console.log(valtozo.substring(5,11));
//ötödik feladat
console.log(valtozo.toUpperCase());
//hatodik feladat
for(let i=0;i<valtozo.length;i++){
    if(i%2!=0){
        valtozo3+=valtozo[i].toUpperCase();
    }
    else{

        valtozo3+=valtozo[i].toLowerCase();
    }
}
console.log(valtozo3);
//hetedik feladat
for(let i =0;i<valtozo.length;i++){
    if(valtozo[i]=="e"){
        valtozo2+="E";
    }
    else{
        valtozo2+=valtozo[i];
    }
}
console.log(valtozo2);
//nyolcadik feladat
let e=valtozo.split("e")
for(let i=0;i<e.length;i++){
    console.log(e[i]+" \t")
}