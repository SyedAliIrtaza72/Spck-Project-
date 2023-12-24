
let x = 0;
let y = 0;
let z = 0;
let a = 0
let b = 0;
let c = 0;


let seconds_1 = setInterval(function () {
  
  x += 1
  if(x === 10){
    x *= 0;
    
  }
 
  document.getElementById('sz2').innerHTML= x;
  
},1000);



let seconds_2 = setInterval(function () {
  
  y += 1
  if(y === 6){
    y *= 0;
  }
  
  document.getElementById('sz1').innerHTML= y;
  
},10000);


let mz_2 = setInterval(function(){
  
  z += 1;
  if(z === 10){
    z *= 0;
  }
  
  document.getElementById('mz2').innerHTML = z;
  
  
},60000);



let mz_1 = setInterval(function(){
  a += 1;
  if(a === 6){
    a *= 0;
  }
  document.getElementById('mz1').innerHTML = a;
},600000);






let hz_2 = setInterval(function(){
  b += 1;
  if(b === 10){
    b *= 0;
  }
  document.getElementById('hz2').innerHTML = b;
},3600000);


let hz_1 = setInterval(function(){
  c += 1;
  if(c === 3){
    c *= 0;
   
  }
  document.getElementById('hz1').innerHTML = c;
},86400000);



