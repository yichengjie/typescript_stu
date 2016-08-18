export interface Person{
    firstName :string ;
    lastName:string ;
}

export function greeter(person :Person){
    return "Hello, " + person.firstName + " " 
    + person.lastName
}

function hello(){
    console.info('i am hello in demo02.ts') ;
}

var user = {firstName:'Jane',lastName:"User"} ;

document.body.innerHTML = greeter(user) ;