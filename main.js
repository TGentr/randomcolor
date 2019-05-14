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
 

console.log(Math.random() * 256);


