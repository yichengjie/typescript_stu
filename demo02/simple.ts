class Animal{
    constructor (public name){

    }
    move(meters){
        console.info(this.name +" moved " + meters +"m .") ;
    }
}

class Snake extends Animal{
    move(){
        console.info('Slitering....') ;
        super.move(5) ;
    }
}

class Horse extends Animal{
    move(){
        console.info('Galloping....') ;
        super.move(45) ;
    }
}

var sam = new Snake('Sammy the Python') ;
var tom:Animal = new Horse('Tommy the Palomino') ;

sam.move() ;
//tom.move() ;
tom.move(34) ;

