export interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

export function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'collor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;  // Type-checker can catch the mistyped name here
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

//let mySquare = createSquare({ colour: "red", width: 100 });
//绕开这些检查非常简单。 最简便的方法是使用类型断言：
//let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
//let mySquare = createSquare({ width: 100, opacity: 0.5 })
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);