const container=document.querySelector(".container");
const cells=document.querySelectorAll(".cell");
const winning_combinations=[[0,1,2],[0,3,6],[0,4,8],[2,4,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7]];
const winningsection=document.querySelector(".status-page");
const winningmessage=document.querySelector(".who-wins");
const restart=document.querySelector(".restart");
let currentClass = "x";
startgame();
function startgame(){
    winningsection.classList.remove('show');
    cells.forEach(cell=>{cell.classList.remove('x')});
    cells.forEach(cell=>{cell.classList.remove('o')});
currentClass="x";
hover();
cells.forEach(cell=>{cell.addEventListener("click",enter,{once:true})});

function enter(e){
    var cell=e.target;
    if(currentClass === "o"){
        cell.classList.add("o");
        checkStatus(currentClass);
    }else{
        cell.classList.add("x");
        checkStatus(currentClass);
    }
    controlSwap(currentClass);
    hover(currentClass);
}
}



function hover(){
    container.classList.remove("x");
    container.classList.remove("o");
    if(currentClass==="x"){
    container.classList.add("x");
    }else{
        container.classList.add("o");
    }
}

function controlSwap(){
    if(currentClass==="x"){
        currentClass="o";
    }else if(currentClass==="o"){
        currentClass="x";
    }
}

function checkStatus(currentClass){
    if(winning_combinations.some(combination =>{
        return combination.every(index =>{
            return cells[index].classList.contains(currentClass)
        })
    })){
        winningsection.classList.add('show');
        if(currentClass==="x"){
        winningmessage.classList.add('x-wins');
        }else if(currentClass==="o"){
            winningmessage.classList.add('o-wins');
        }
    }else if([...cells].every(cell=>{return cell.classList.contains("x") || cell.classList.contains("o")})){
        winningsection.classList.add('show');
        winningmessage.classList.add('draw');
    }
 }
 function samplefn(){
     location.reload()
 }
restart.addEventListener("click",samplefn);


