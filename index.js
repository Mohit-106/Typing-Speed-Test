const setofWords=[
    "shbujhukjxznj",
    "uhasxijoqewiajkdpoxl",
    "isuadhcjqenwdckxasjn",
    "aiuhdcbiuqanoskxn",

];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime,endTime;

// here i selected all the the elements with which i want to work with

const playGame=()=>{
    let randomNumber= Math.floor(Math.random()*setofWords.length);
    msg.innerText=setofWords[randomNumber];

    let date =new Date();
    startTime=date.getTime ();
    btn.innerText= "Done";

}

const endPlay=()=>{
    let date = new Date();
    endTime=date.getTime();
    let totalTime = ((endTime-startTime)/1000);

}





btn.addEventListener('click', function(){

    if(this.innerText=='Start'){
        typeWords.disabled=false;
        playGame();
    }
    else if(this.innerText=="Done"){
        typeWords.disabled=true;
        btn.innerText="Start";
        endPlay();

    }

})

