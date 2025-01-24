let age: number = 25; 

let name: string = 'Alice';

let isActive: boolean = true;

let nullableValue: string|null = null;

let numbers : number[] = [1, 2, 3, 4];

let names: string[] = ['Alice', 'Bob'];

let mixed : (string|number)[] = ['Alica', 1, 2, 'Bob'];

let colors: (string|number|boolean)[] = [123, 'red', true, 'blue'];


const add = (a:number, b:number): number => {
    return a - b; 
}

const logMassage = (message: string): void => {
    console.log(message);
    
}
