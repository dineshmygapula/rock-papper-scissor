let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice =()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    msg.innerText="game is a draw please play again!"
    msg.style.backgroundColor = "black";

}
const showWinner=(userWin,userId,compChoice)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`you win ! your ${userId} beats ${compChoice}`;
    msg.style.backgroundColor="green";
   }
   else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`you lose ! ${compChoice} beats your ${userId}`;
    msg.style.backgroundColor="red";
   }
}
const playGame=(userId)=>{
     console.log("userchoice=",userId);
     const compChoice=genCompChoice();
     console.log("compChoice=",compChoice);
     if(userId===compChoice){
          drawGame();
     }else{
    let userWin=true;
    if(userId==="rock"){
         userWin=compChoice==="paper"? false:true;     
       }
    else if (userId==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userId,compChoice);
    }       
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userId=choice.getAttribute("id");
        playGame(userId);

    })
})