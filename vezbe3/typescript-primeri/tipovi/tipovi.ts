let myString: string;
// myString = 5; // Error: Type 'number' is not assignable to type 'string'

let anotherString;
anotherString = 'Hello, world!'
anotherString = 5;


// Basic types
let aString: string = 'This is a string';
let aNumber: number = 5;
let aBoolean: boolean = true;
let aList: number[] = [1, 2, 3];
let anArray: Array<string> = ["a", "b", "c"];
let anything: any;
let tuple: [number, string] = [10, "a"];
enum Color {
    Red, Yellow, Green
}

// Union types
let union: number | string = 5;
union = 'a';
// union = true; // Error: Type 'boolean' is not assignable to type 'number | string'


let colorVariable: Color = Color.Green
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;