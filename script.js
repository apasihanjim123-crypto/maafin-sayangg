const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const buttonArea=document.getElementById("buttonArea");
const hint=document.getElementById("hint");
const modal=document.getElementById("modal");
const closeModal=document.getElementById("closeModal");
const messages=["Yah, jangan pilih itu dong 😭","Tombolnya malu-malu, hehe 🙈","Coba pencet yang pink aja 💗","Aku serius minta maaf, ya 🥺","Lho kok dikejar terus wkwk 😭"];
let messageIndex=0;
function moveNoButton(){
  const area=buttonArea.getBoundingClientRect(), btn=noBtn.getBoundingClientRect();
  const maxX=Math.max(0,(area.width-btn.width)/2);
  const x=(Math.random()*2-1)*maxX;
  const y=(Math.random()*90)-45;
  noBtn.style.position="relative";noBtn.style.left=`${x}px`;noBtn.style.top=`${y}px`;
  hint.textContent=messages[messageIndex++%messages.length];
}
noBtn.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")moveNoButton()});
noBtn.addEventListener("pointerdown",e=>{e.preventDefault();moveNoButton()});
noBtn.addEventListener("click",e=>{e.preventDefault();moveNoButton()});
yesBtn.addEventListener("click",()=>{modal.hidden=false;createConfetti()});
closeModal.addEventListener("click",()=>modal.hidden=true);
modal.addEventListener("click",e=>{if(e.target===modal)modal.hidden=true});
function createConfetti(){for(let i=0;i<75;i++){const p=document.createElement("span");p.className="confetti";p.style.left=`${Math.random()*100}vw`;p.style.background=["#ff5f9e","#ffd166","#a78bfa","#7dd3fc","#fb7185"][Math.floor(Math.random()*5)];p.style.animationDelay=`${Math.random()*.8}s`;p.style.animationDuration=`${2+Math.random()*1.8}s`;document.body.appendChild(p);setTimeout(()=>p.remove(),4500)}}
