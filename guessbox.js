var guessNum=document.getElementById("guess-num"),
    guessButton = document.getElementById("guess-button"),
    clearButton=document.getElementById("clear-button"),
    displayResult = document.getElementById("guess-result"),
    displayScore=document.getElementById("display-score");

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randy = Math.random();
        step1 = (max - min + 1);
        return Math.floor(randy * (max - min + 1)) + min; 
    }

    var clearAll = function(){
        guessNum.value = "";
        displayResult.innerHTML="";
        displayScore.innerHTML="";
    }
    clearButton.addEventListener("click", function(){
        clearAll();
    });
    guessButton.addEventListener("click", function(){
        // displayArea.innerText += Math.random() + "\n";
        // displayArea.innerText += Math.random() + "\n";
        var result;
        var randomNum =getRandomInt(1,100);
           if( guessNum.value== randomNum){
            result="match";          
       }else{
            result="Do not match";}
        
        displayResult.innerText += result + "\n";
        displayScore.innerText +="Guess number is: "+ guessNum.value+ ";  Random number is:"+randomNum+"\n";
       
    });