console.log("tic tac toe game ")
let b1 =document.querySelector(".p1")
let b2 =document.querySelector(".p2")
let b3 =document.querySelector(".p3")
let b4 =document.querySelector(".p4")
let b5 =document.querySelector(".p5")
let b6 =document.querySelector(".p6")
let b7 =document.querySelector(".p7")
let b8 =document.querySelector(".p8")
let b9 =document.querySelector(".p9")
let reset =document.querySelector(".reset")
let x="X"
let y="O"
b1.addEventListener("click",()=>{b1.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b2.addEventListener("click",()=>{b2.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b3.addEventListener("click",()=>{b3.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b4.addEventListener("click",()=>{b4.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b5.addEventListener("click",()=>{b5.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b6.addEventListener("click",()=>{b6.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b7.addEventListener("click",()=>{b7.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b8.addEventListener("click",()=>{b8.innerText=x; t=x; x=y;y=t; win()},{ once: true })
b9.addEventListener("click",()=>{b9.innerText=x; t=x; x=y;y=t; win()},{ once: true })
function win() {
  if (b1.innerText && b1.innerText == b2.innerText && b2.innerText == b3.innerText) {
    announce(b1.innerText);      
  } else if (b4.innerText && b4.innerText == b5.innerText && b5.innerText == b6.innerText) {
    announce(b4.innerText);      
  } else if (b7.innerText && b7.innerText == b8.innerText && b8.innerText == b9.innerText) {
    announce(b7.innerText);      
  } else if (b1.innerText && b1.innerText == b4.innerText && b4.innerText == b7.innerText) {
    announce(b1.innerText);      
  } else if (b2.innerText && b2.innerText == b5.innerText && b5.innerText == b8.innerText) {
    announce(b2.innerText);      
  } else if (b3.innerText && b3.innerText == b6.innerText && b6.innerText == b9.innerText) {
    announce(b3.innerText);      

  } else if (b1.innerText && b1.innerText == b5.innerText && b5.innerText == b9.innerText) {
    announce(b1.innerText);   
  } else if (b3.innerText && b3.innerText == b5.innerText && b5.innerText == b7.innerText) {
    announce(b3.innerText);   
  }
}

function announce(mark) {
  setTimeout(() => {
    if (mark === "X") {
      alert("X won the game");
    } else if (mark === "O") {
      alert("O won the game");
    }
  }, 500);  
}
