export interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

export class Clock implements ClockInterface {
    currentTime:Date
    constructor(h:number,m:number){}
    setTime(d:Date){
        this.currentTime =d ;
    }
}