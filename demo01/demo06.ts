//接口可以多继承
interface Shape{
    color:string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape ,PenStroke{
    sideLength:number
}

let square = <Square> {} ;
square.color = "blue" ;
square.sideLength =  20 ; 
square.penWidth = 5.3;

console.info(square) ;