 // here we created a array of words we want to display for the typing test
 const setofWords = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit provident inventore temporibus repellendus commodi", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sint.",
 "Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, doloribus voluptas.","  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut mollitia assumenda nostrum soluta consequatur modi totam necessitatibus nihil nesciunt."];
     // FontColor(255,255,0,setofWords)
 
     // here we selected all the the elements with which we  want to work with
     const msg = document.getElementById("msg");
     const typeWords = document.getElementById("mywords");
     const btn = document.getElementById("btn");
     let startTime, endTime;
 
     const playGame = () => {
         let randomNumber = Math.floor(Math.random() * setofWords.length); //it gives us the random index of the array to display for test
         msg.innerText = setofWords[randomNumber];
 
         let date = new Date(); // it gives us the time when test started
         startTime = date.getTime();
         btn.innerText = "Done";
 
         let;
     };
 
     const endPlay = () => {
         let date = new Date();
         endTime = date.getTime(); //end time of the test
         let totalTime = (endTime - startTime) / 1000; // we divided by 1000 because js displays time in ms
 
         let totalStr = typeWords.value;
         let wordCount = wordCounter(totalStr);
         let speed = Math.round((wordCount / totalTime) * 60); //it will give total speed
         let finalScore = speed + " " + "words per minutes"; //this scotre we want to display\\\
         finalScore += compareWords(msg.innerText, totalStr);
         msg.innerText = finalScore;
     };
     const compareWords = (str1, str2) => {
         let words1 = str1.split(" ");
         let words2 = str2.split(" ");
         let cnt = 0;
 
         words1.forEach(function (item, index) {
             if (item == words2[index]) {
                 cnt++;
             }
         });
 
         let errorWords = words1.length - cnt;
         return (
             "  " +
             cnt +
             " " +
             "correct out of" +
             " " +
             words1.length +
             " " +
             "words and total number of errors are" +
             " " +
             errorWords +
             "."
         );
     };
 
     const wordCounter = (str) => {
         let response = str.split(" ").length; //this split tell us when space occure so that we come to know that new word 
         return response;
     };
 
     btn.addEventListener("click", function () {
         // this function basically manage the click on the start button
 
         if (this.innerText == "Start") {
             typeWords.disabled = false;
             playGame();
         } else if (this.innerText == "Done") {
             typeWords.disabled = true;
             btn.innerText = "Start";
             endPlay();
         }
     });
 