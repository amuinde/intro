//console.log("hello");
let a = 5;  
console.log(a); 
//Declare variables for a student's name, age, score, and enrollment status.
//  Assign suitable types and values. 
let studentName : string = "Jayden";
let age : number = 20; 
let score : number = 85;
let isEnrolled : boolean = true;
//Try assigning a string to the score varable and observe the error.
//score = Eighy five; // This will cause a TypeScript error because score is of type number, not string.
//score ="b"; // This will also cause a TypeScript error because score is of type number, not string.

//Create a number[] array containing five scores. 
// Add another score, print the length, and use filter() to return scores greater than or equal to 50.
let scores: number[]=[ 45, 67, 89, 34, 76];
scores.push(86);
console.log(scores.length); // This will print the length of the scores array, which is now 6.
let pass= scores.filter(score => score >= 50);
console.log(pass); 

//Write a function named multiply that accepts two numbers and returns their product. 
// Add the correct parameter and return types.
function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(5, 10)); // This will print the product of 5 and 10, which is 50.

//Create a Product interface with name as a string, price as a number, and inStock as a boolean. 
// Create three products and store them in an array.
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

let product1: Product = { name: "Laptop", price: 10000, inStock: true };
let product2: Product = { name: "phone", price: 1000, inStock: false };
let product3: Product = { name: "tablet", price: 500, inStock: true };

let products: Product[] = [product1, product2, product3];
console.log(products);

//Build a small program that stores at least five students in an array of typed objects.
//  Each student must have a name and score. 
// Write a function that returns "Pass" for scores of 50 or higher and "Fail" otherwise, then print each student's result. 
interface Student {
    name: string;
    score: number;
}
let students: Student[] = [
    { name: "Alice", score: 78 },
    { name: "Bob", score: 45 },
    { name: "Charlie", score: 49 },
    { name: "David", score: 50 },
    { name: "Eve", score: 80 }
];

function getStudentResult(student: Student): string {
    return student.score >= 50 ? "Pass" : "Fail";  
}

students.forEach(student => {
    console.log(`${student.name}: ${getStudentResult(student)}`);
});

import { test, expect } from '@playwright/test';

test('login page loads', async ({ page }) => {
  await page.goto('https://example.com/login');
  await expect(page).toHaveTitle(/Login/);
});