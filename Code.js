var accessCode1 = "VARIABLE";
var accessCode2 = "FUNCTION";
var accessCode3 = "DATABASE";

var text1 = true;
var text2 = true;
var text3 = true;

function clues(){
    
if(text1 === true){
    fill("white")
    textSize(15)
    text("R E V B A I L A", 100,50)
    fill("lightblue")
    text("Hint: Always changing, not constant !!", 100,70)
}

if(text2 === true){
    fill("white")
    textSize(15)
    text("C U T N I F O N", 700,150)
    fill("lightblue")
    text("Hint: Performs a particular task !!", 700,170)
}

if(text3 === true){
    fill("white")
    textSize(15)
    text("A T E D A S B A", 100,250)
    fill("lightblue")
    text("Hint: Stores all information !!", 100,270)
}

if(text1 === false){
    fill("white")
    textSize(25)
    text("Code Cracked!", 100,70)
}

if(text2 === false){
    fill("white")
    textSize(25)
    text("Code Cracked!", 700,150)
}

if(text3 === false){
    fill("white")
    textSize(25)
    text("Code Cracked!", 100,270)
}


}