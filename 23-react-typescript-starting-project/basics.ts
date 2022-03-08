// Primitives: number, string, boolean
let age: number;
age = 25;

let userName: string = 'DuyNVA';
let isShow: boolean = false;


// More complex types: arrays, objects
let hobbies: string[] = ['Duy', 'Linh'];

let person: { name: string, age: number };
person = { name: 'Duy', age: 25 };

let people: { name: string, age: number }[];
people = [{ name: 'Duy', age: 25 }, { name: 'Duy', age: 25 }, { name: 'Duy', age: 25 }];


// function types, parameters
function Add(x: number = 0, y: number = 0): number {
  return x + y;
}

function print(x: any) {
  console.log(x);
}


// type inference
let course: string | number = 'React';
course = 12;


// generics
function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const test = insertAtBeginning([1, 2, 3, 4], 0); // [0,1,2,3,4]
const test1 = insertAtBeginning(['Nguyen', 'Vu', 'Anh', 'Duy'], 'DuyNVA'); // ['DuyNVA', 'Nguyen', 'Vu', 'Anh', 'Duy'] 
