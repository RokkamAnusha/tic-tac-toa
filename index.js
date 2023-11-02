let btnref = document.querySelectorAll(".buttons");
let popupref = document.querySelector(".popup");
let newgamebtn = document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msgref = document.getElementById("message");

//winnig pattern array
 let winningpattern =[[0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]];
 //player 'X' plays first
 let xturn = true;
 let count=0;

//disable all buttons
const disableButtons =()=>{
    btnref.forEach((element)=>(element.disabled = true));
    //enable popup
    popupref.classList.remove("hiden");
}

//enable all buttons (for new game and restart)
const enableButtons = () =>{
    btnref.forEach((element)=>{
        element.innerText = "";
        element.disabled = false;
    });
    popupref.classList.add("hiden");
}
// this function is executed when a player wins
const winFunction= (letter) => {
    disableButtons();
    if(letter == "X"){
        msgref.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else{
        msgref.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};
//Function for draw
const drawFunction = () =>{
    disableButtons();
    msgref.innerHTML = "&#x1F60E; <br> It's a Draw";
    
}
//new game
newgamebtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});
restartbtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});


 //win logic
 const winchecker = () =>{
    //looop through all win patterns
    for(let i of winningpattern){
        let [element1, element2, element3 ] = [
            btnref[i[0]].innerText,
            btnref[i[1]].innerText,
            btnref[i[2]].innerText,
            ];
             //check if element are filled 
    // if 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")){
        if (element1 == element2 && element2 == element3 ){
            //if all 3 buttons have same values then pass the value to winfunction
            winFunction(element1);
        }
    }
 }
    };
   
//display x/o on click
btnref.forEach((element)=> {
    element.addEventListener("click",()=>{
        if(xturn){
            xturn = false;
            //display x
            element.innerText = "X";
            element.disabled = true;

        }
        else{
            xturn = true;
            //display y
            element.innerText="O";
            element.disabled = true;
        }
        count += 1;
        if (count === 9){
            drawFunction();
                }
        //check for win on every click
        winchecker();
    });
});
//enable button and disable popup 
window.onload = enableButtons;