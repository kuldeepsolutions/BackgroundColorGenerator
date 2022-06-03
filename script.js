var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var degree = document.getElementById("degree");
var color4 = document.getElementById("color4");
var body = document.getElementById("first");

var range1 = document.getElementById("color12");
var range2 = document.getElementById("color13");
var range3 = document.getElementById("color14");


let fg = body.style.color;
// console.log(color1)

var setGradient = ()=>{
    body.style.background = `linear-gradient(${degree.value}deg,${color1.value} ${range1.value}%,${color2.value} ${range2.value}% ,${color3.value} ${range3.value}% )`;
    // console.log(degree.value)
    if(color1.value == color2.value || color1.value == color3.value || color2.value == color3.value){
        alert("Please Select Different color values");
        color1.value="#a0b0c0";
        color2.value = "#b2c8f0";
        color3.value = "#76aa76";
    }
    fg = "#f0f0f0"
    if(fg == color1.value || fg == color2.value || fg == color3.value){
        color4.addEventListener("input",(e)=>{
            fg = color4.value;
            console.log(fg)
        })
    }

}
color1.addEventListener("input",setGradient)
color2.addEventListener("input",setGradient)
color3.addEventListener("input",setGradient)
degree.addEventListener("input",setGradient);


range1.addEventListener("input",setGradient);
range2.addEventListener("input",setGradient);
range3.addEventListener("input",setGradient);
