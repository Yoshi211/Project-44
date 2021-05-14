class Security {

    constructor(){

        // Add code to create the input and button elements
        this.inputv = createInput("CODE");
        this.buttonv = createButton('Play');

        this.inputf = createInput("CODE");
        this.buttonf = createButton('Play');

        this.inputd = createInput("CODE");
        this.buttond = createButton('Play');

        this.inputv.position(100,80);
        this.buttonv.position(100,105);

        this.inputf.position(700,180);
        this.buttonf.position(700,205);

        this.inputd.position(100,280);
        this.buttond.position(100,305);
    }

    display(){
        // Add code to make the buttons function as expected
        this.buttonv.mousePressed(()=>{
            if(accessCode1 === this.inputv.value()){
                this.inputv.hide();
                this.buttonv.hide();
                score++;
                text1 = false;
            }
          });

          this.buttonf.mousePressed(()=>{
            if(system.authen(accessCode2,this.inputf.value())){
                this.inputf.hide();
                this.buttonf.hide();
                score++;
                text2 = false;
            }
          });

          this.buttond.mousePressed(()=>{
            if(system.authen(accessCode3,this.inputd.value())){
                this.inputd.hide();
                this.buttond.hide();
                score++;
                text3 = false;
            }
          });
    }
}