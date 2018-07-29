function randomColor(){
  let colorGen =  "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += colorGen[Math.floor(Math.random()*16)];
  }

  return color;
}

function randomChar(){
  let letters = "123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
  let len = letters.length;
  let char =  letters[Math.floor(Math.random()*60)]; 
  return char;
}

function show(){
    // let id  = "d"+num; 
    // let element = document.getElementById(id);
    let el = document.getElementById("divs");
    let element = document.createElement("div");
    element.className = "drops";
    element.innerHTML = randomChar();
    element.style.color = randomColor();
    element.style.fontsize =  Math.floor(Math.random()*50) + 10 +"px";
    element.style.top = -50+"px";
    element.style.left = Math.floor(Math.random()*1400)+"px";
    element.style.animationDuration = Math.floor(Math.random()* 10) + 5+"s";
    element.style.animationIterationCount = "infinite";
    element.style.animationDelay = Math.floor(Math.random()* 15) +"s";
    element.style.zIndex = Math.floor(Math.random()*20);
    el.appendChild(element);
}


function call(){
  for(let i = 0; i < 200; i++){
    show();
  }
}





