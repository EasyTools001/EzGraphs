let nameOf ;
let BtnClicked = 0 ;
let randomChance ;
let firstNumber ;
let secondNumber ;
let thirdNumber ;
let fourthNumber ;
let fifthNumber ;


setTimeout(() => {
    let audio ;
audio = new Audio('Others/audio.mp3') ;
audio.play() ;
}, 1000);


function setName() {

    BtnClicked = BtnClicked + 1 ;

    if (BtnClicked = 2) {
        
        BtnClicked = BtnClicked + 1 ;
        nameOf = document.getElementById("nameValue").value ;
        document.getElementById("nameTitle").innerHTML = "You can change it later !"
       

   
    }

    if (BtnClicked = 3) {
            
        randomChance = Math.ceil(Math.random()*3)
        console.log(randomChance) ;

        if (randomChance == 2) {
            
            document.getElementById("nameTitle").innerHTML = "Compiler jQuery DDos/Html syntax"
            document.getElementById("nameTitle").style.color = "red" ;

        }
        if (randomChance != 2) {
            
            document.getElementById("graphTitle").innerHTML = nameOf ;

        }
        
    
    }



}

function setNumber() {

    firstNumber = document.getElementById("NumberInput").value ;
    firstNumber = Number(firstNumber) ;

    if (firstNumber >= 300) {

        firstNumber = 300 ;
        
    }
    
    document.getElementById('barOne').style.paddingTop = firstNumber + "px" ;
    document.getElementById("barOneNumber").innerHTML = firstNumber ;
    

}

function setNumber1() {

    secondNumber = document.getElementById("NumberInput2").value ;
    secondNumber = Number(secondNumber) ;

      if (secondNumber >= 300) {

        secondNumber = 300 ;
        
    }
    
    document.getElementById('barTwo').style.paddingTop = secondNumber + "px" ;
    document.getElementById("barTwoNumber").innerHTML = secondNumber ;
    

}

function setNumber2() {

    thirdNumber = document.getElementById("NumberInput3").value ;
    thirdNumber = Number(thirdNumber) ;

        if (thirdNumber >= 300) {

        thirdNumber = 300 ;
        
    }
    
    document.getElementById('barThird').style.paddingTop = thirdNumber + "px" ;
    document.getElementById("barThirdNumber").innerHTML = thirdNumber ;
    

}

function setNumber3() {

    fourthNumber = document.getElementById("NumberInput4").value ;
    fourthNumber = Number(fourthNumber) ;

    
        if (fourthNumber >= 300) {

        fourthNumber = 300 ;
        
    }
    
    document.getElementById('barFourth').style.paddingTop = fourthNumber + "px" ;
    document.getElementById("barFourthNumber").innerHTML = fourthNumber ;
    

}

function setNumber4() {

    fifthNumber = document.getElementById("NumberInput5").value ;
    fifthNumber = Number(fifthNumber) ;

    
        if (fifthNumber >= 300) {

        fifthNumber = 300 ;
        
    }
    
    document.getElementById('barFifth').style.paddingTop = fifthNumber + "px" ;
    document.getElementById("barFifthNumber").innerHTML = fifthNumber ;
    

}
