let gameSeq=[];
let userSeq=[];

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let btns=["first","second","third","four"];

let start=false;
let level=0;

let score=false;

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game is start");
        start = true;
    }

    levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranIdx=Math.floor(Math.random() * 3);
    let randCol=btns[ranIdx];
    let ranBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(ranBtn);
    console.log(btns[ranIdx]);//

   
   
}

function checkResult(idx){
  
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
       }
    } else {
        h2.innerHTML=`Game Over! Your Score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        
        if(score == false){
            h3.innerText=`Your Score Was ${level}`;
            score=true;
            
        }
       
        if(userSeq.length < gameSeq.length){
            h3.innerText=`Your Highest Score Was ${gameSeq.length}`;
        } else if(userSeq.length > gameSeq.length){
            h3.innerText=`Your Highest Score Was ${level}`;
        } 

        reset();
        

    }
}


function btnPress(){
    // console.log(this.innerText);
  let btn=this;
  userFlash(btn);
//   levelUp(btn);

    let userColor=btn.getAttribute("id");
    console.log(userColor);//
    userSeq.push(userColor);

    checkResult(userSeq.length-1);
}



let btnAll=document.querySelectorAll(".btn");
for(btn of btnAll){
    btn.addEventListener("click", btnPress);
}

function reset(){
    start=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}