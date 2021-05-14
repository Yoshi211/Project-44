class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authen(acutalCode,enteredCode){
        if(acutalCode === enteredCode)
            return true
         else 
            return false
    }
    
}