var button = document.querySelector('button');
var nazwa = document.querySelector('p');
button.addEventListener("click", random_bg_color);


 function random_bg_color() {
    var x = Math.floor(Math.random() * 256); //z dokumentacji mozilla Math.random / rgb z przedziału 0-255
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 
    nazwa.innerHTML = `${bgColor}`;
    document.body.style.background = bgColor;
    }
 

//console.log(Math.random() * 256); 



/*----------- wersja 2 z losowym kolorem szesnastkowym (heksadecymalnym) ---------------*/


/* 
var button = document.querySelector('button');
var nazwa = document.querySelector('p');
var koloryHex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
button.addEventListener("click", random_bg_color2);



function random_bg_color2(){


var nrHex = '#';
for(i=0; i<6; i++) {
let rand = Math.floor(Math.random()*koloryHex.length); // 0-16
console.log(rand)
nrHex += koloryHex[rand];
}

nazwa.innerHTML = nrHex;
document.body.style.background = nrHex;
}  */

