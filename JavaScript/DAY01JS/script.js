// # JAVASCRIPT COMPLETE NOTES
// ## DAY 01 – INTRODUCTION TO JAVASCRIPT AND FUNDAMENTALS

// # PART 1: INTRODUCTION TO JAVASCRIPT

// ## 1. What is JavaScript?

// JavaScript is a high-level, lightweight, interpreted and dynamically typed programming language. It is mainly used to make websites interactive and dynamic.

// Simple words mein, JavaScript ek programming language hai jiski help se hum website mein functionality add kar sakte hain.

// **Why do we use JavaScript?**

// Hum JavaScript ka use isliye karte hain kyunki HTML sirf website ka structure provide karta hai aur CSS website ko design karta hai, lekin website ko interactive banane ke liye JavaScript ki zarurat hoti hai.

// **Uses of JavaScript:**

// 1. Website ko interactive banana.
// 2. Website mein animations create karna.
// 3. Form validation karna.
// 4. Button click par actions perform karna.
// 5. Dynamic content display karna.
// 6. API se data fetch karna.
// 7. Frontend development karna.
// 8. Backend development karna using Node.js.
// 9. Web applications banana.
// 10. Mobile applications develop karna.
// 11. Browser-based games banana.
// 12. Real-time applications banana.

// Example:

// ```javascript
// console.log("Hello World");
// ```

// Output:

// ```text
// Hello World
// ```

// ## 2. Why is JavaScript Important?

// JavaScript important hai kyunki ye website ko user-friendly aur interactive banati hai.

// Example:

// Suppose hum ek login page bana rahe hain.

// - HTML se username aur password fields create karenge.
// - CSS se login page design karenge.
// - JavaScript se check karenge ki user ne correct information enter ki hai ya nahi.

// **HTML = Structure**

// **CSS = Styling**

// **JavaScript = Functionality**

// ## 3. What is a Scripting Language?

// A scripting language is a programming language that is commonly used to automate tasks and control the behaviour of software applications.

// JavaScript ek scripting language hai jo browser mein web pages ko interactive banane ke liye use hoti hai.

// **Why do we call JavaScript a scripting language?**

// Kyunki JavaScript ka use existing applications aur environments, jaise web browsers, ke behaviour ko control karne ke liye kiya ja sakta hai.

// ## 4. How Does a Computer Understand Instructions?

// Computer internally binary language par work karta hai.

// Binary language mein sirf do digits hoti hain:

// 1. 0
// 2. 1

// Computer ke electronic circuits internally binary states represent karte hain.

// Example:

// ```text
// 01010101
// 10101010
// 11001100
// ```

// Hum humans English aur Hindi mein instructions likhte hain, lekin computer machine instructions execute karta hai.

// Isliye programming language aur computer hardware ke beech translation aur execution ka process hota hai.

// **Basic Process:**

// Human Language → Programming Language → JavaScript Engine → Machine Instructions → Output

// ## 5. What is a Compiler?

// A compiler is a program that translates source code into another form, such as machine code or intermediate code.

// Simple words mein, compiler programming language ke code ko computer ke execute karne layak form mein convert karta hai.

// **Why do we use a Compiler?**

// 1. Source code ko translate karne ke liye.
// 2. Program execution ko efficient banane ke liye.
// 3. Errors detect karne mein help karne ke liye.
// 4. Machine code ya intermediate code generate karne ke liye.

// Examples: C and C++ commonly use compilation.

// ## 6. What is an Interpreter?

// An interpreter is a program that processes and executes source code at runtime.

// Simple words mein, interpreter code ko runtime par process karke execute karta hai.

// **Why do we use an Interpreter?**

// 1. Code ko execute karne ke liye.
// 2. Development aur testing ko easy banane ke liye.
// 3. Runtime errors identify karne ke liye.

// Note: Modern JavaScript engines interpretation aur Just-In-Time (JIT) compilation dono techniques use karte hain. JavaScript ko sirf traditional interpreter language kehna technically complete explanation nahi hai.

// ## 7. History of JavaScript

// JavaScript was created by Brendan Eich in 1995 at Netscape.

// Important history:

// 1. JavaScript was created in 1995.
// 2. Its original name was Mocha.
// 3. Later, it was renamed LiveScript.
// 4. Finally, it became JavaScript.
// 5. JavaScript was initially developed for web browsers.
// 6. It became an important language for web development.

// **Important:**

// Java and JavaScript are two different programming languages.

// ## 8. What is ECMAScript?

// ECMAScript is the official standard on which JavaScript is based.

// Simple words mein, ECMAScript JavaScript language ke rules, features aur specifications define karta hai.

// **Why do we need ECMAScript?**

// 1. JavaScript ke common standards define karne ke liye.
// 2. Different browsers mein consistency maintain karne ke liye.
// 3. New language features introduce karne ke liye.
// 4. JavaScript ko continuously improve karne ke liye.

// ## 9. What is ES6?

// ES6 stands for ECMAScript 2015.

// ES6 JavaScript ka ek major update tha jisme many new features introduce hue.

// **Important ES6 Features:**

// 1. let
// 2. const
// 3. Arrow Functions
// 4. Template Literals
// 5. Destructuring
// 6. Spread Operator
// 7. Rest Parameters
// 8. Classes
// 9. Modules
// 10. Promises

// **Why is ES6 Important?**

// ES6 ne JavaScript code ko more readable, reusable aur manageable banaya.

// ## 10. Why Do JavaScript Versions Change?

// JavaScript versions change because developers continuously improve the language.

// Reasons:

// 1. New features add karne ke liye.
// 2. Existing problems solve karne ke liye.
// 3. Performance improve karne ke liye.
// 4. Security improve karne ke liye.
// 5. Code ko simple banane ke liye.
// 6. Modern development requirements ko support karne ke liye.
// 7. Developers ki productivity increase karne ke liye.

// Important Versions:

// | Version | Year | Important Features |
// |---|---|---|
// | ES1 | 1997 | First ECMAScript standard |
// | ES3 | 1999 | Regular Expressions, try/catch |
// | ES5 | 2009 | Strict Mode, JSON support |
// | ES6 | 2015 | let, const, Arrow Functions |
// | ES2016 | 2016 | includes(), Exponentiation |
// | ES2017 | 2017 | async/await |
// | ES2020 | 2020 | Optional Chaining, Nullish Coalescing |

// ## 11. How Does JavaScript Run in a Browser?

// JavaScript browser ke JavaScript Engine ki help se execute hoti hai.

// Examples:

// 1. Google Chrome – V8 Engine
// 2. Firefox – SpiderMonkey
// 3. Safari – JavaScriptCore

// **Working Process:**

// 1. Browser HTML document load karta hai.
// 2. Browser JavaScript code ko read karta hai.
// 3. JavaScript Engine code ko parse karta hai.
// 4. Engine code ko execute karta hai.
// 5. JavaScript DOM ke through HTML elements ko modify kar sakti hai.

// ## 12. What is DOM?

// DOM stands for Document Object Model.

// DOM is a programming interface that represents an HTML document as a tree of objects.

// **Why do we use DOM?**

// 1. HTML elements select karne ke liye.
// 2. Text change karne ke liye.
// 3. CSS styles change karne ke liye.
// 4. New HTML elements create karne ke liye.
// 5. Existing elements delete karne ke liye.
// 6. User interactions handle karne ke liye.

// Example:

// ```html
// <h1 id="heading">Hello</h1>

// <script>
// document.getElementById("heading").innerText = "Welcome";
// </script>
// ```

// Output:

// ```text
// Welcome
// ```

// ## 13. Why Do We Use JavaScript in Websites?

// JavaScript websites mein four major purposes ke liye use hoti hai:

// 1. Interaction – User ke actions par response dena.
// 2. Engagement – Website ko interesting banana.
// 3. Animation – Elements ko animate karna.
// 4. Validation – User ke input ko check karna.

// Other uses:

// - Dynamic content.
// - API integration.
// - Form submission.
// - Event handling.
// - Real-time updates.

// ## 14. How to Connect JavaScript with HTML?

// JavaScript ko HTML ke saath connect karne ke two common methods hain.

// ### A. Internal JavaScript

// JavaScript code HTML file ke andar script tag mein likhte hain.

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//     <title>JavaScript</title>
// </head>
// <body>

//     <h1>Hello JavaScript</h1>

//     <script>
//         console.log("Hello World");
//     </script>

// </body>
// </html>
// ```

// ### B. External JavaScript

// JavaScript code ko separate .js file mein likhte hain.

// HTML File:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//     <title>JavaScript</title>
// </head>
// <body>

//     <h1>Welcome</h1>

//     <script src="script.js"></script>

// </body>
// </html>
// ```

// JavaScript File (script.js):

// ```javascript
// console.log("JavaScript is Connected");
// ```

// **Why do we use External JavaScript?**

// 1. Code reusable hota hai.
// 2. HTML clean rehta hai.
// 3. Code maintain karna easy hota hai.
// 4. Multiple HTML pages mein same JavaScript file use kar sakte hain.
// 5. Team development easy hota hai.

// ---

// # PART 2: JAVASCRIPT DAY 01 – BASIC FUNDAMENTALS

// ## 1. Words vs Keywords

// ### What are Words?

// Programming language mein identifiers, variable names aur other names use hote hain.

// Example:

// ```javascript
// let name = "Vikash";
// ```

// Here:
// - let = Keyword
// - name = Identifier
// - "Vikash" = String Value

// ### What are Keywords?

// Keywords are reserved words that have predefined meanings in JavaScript.

// Examples:

// ```javascript
// var
// let
// const
// if
// else
// for
// while
// function
// return
// class
// ```

// **Why do we use Keywords?**

// Keywords ki help se hum JavaScript ko instructions dete hain.

// Example:

// ```javascript
// let age = 21;

// if (age >= 18) {
//     console.log("Eligible");
// }
// ```

// ---

// ## 2. What is a Variable?

// A variable is a named storage location used to store data.

// Simple words mein, variable ek container ki tarah hota hai jisme hum data store karte hain.

// Example:

// ```javascript
// let age = 21;

// console.log(age);
// ```

// Output:

// ```text
// 21
// ```

// **Why do we use Variables?**

// 1. Data store karne ke liye.
// 2. Data ko reuse karne ke liye.
// 3. Calculations perform karne ke liye.
// 4. Program ko manageable banane ke liye.
// 5. Data ko update karne ke liye.

// ## 3. Types of Variables in JavaScript

// JavaScript mein variables declare karne ke three main keywords hain:

// 1. var
// 2. let
// 3. const

// ### A. var

// var is used to declare a function-scoped or globally scoped variable.

// Example:

// ```javascript
// var a = 10;

// a = 20;

// console.log(a);
// ```

// Output:

// ```text
// 20
// ```

// Features:

// 1. Redeclaration allowed hai.
// 2. Reassignment allowed hai.
// 3. Function scoped hota hai.
// 4. Hoisting hoti hai.
// 5. Initial value undefined hoti hai if not initialized.

// ### B. let

// let is used to declare a block-scoped variable.

// Example:

// ```javascript
// let a = 10;

// a = 20;

// console.log(a);
// ```

// Output:

// ```text
// 20
// ```

// Features:

// 1. Same scope mein redeclaration allowed nahi hai.
// 2. Reassignment allowed hai.
// 3. Block scoped hota hai.
// 4. Hoisting hoti hai.
// 5. Initialization se pehle access nahi kar sakte.

// ### C. const

// const is used to declare a block-scoped variable whose binding cannot be reassigned.

// Example:

// ```javascript
// const a = 10;

// console.log(a);
// ```

// Output:

// ```text
// 10
// ```

// Features:

// 1. Same scope mein redeclaration allowed nahi hai.
// 2. Reassignment allowed nahi hai.
// 3. Block scoped hota hai.
// 4. Hoisting hoti hai.
// 5. Declaration ke time initialization required hoti hai.

// ### Difference Between var, let and const

// | Feature | var | let | const |
// |---|---|---|---|
// | Redeclaration | Yes | No | No |
// | Reassignment | Yes | Yes | No |
// | Scope | Function | Block | Block |
// | Hoisting | Yes | Yes | Yes |
// | Before initialization | undefined | TDZ | TDZ |
// | Initialization required | No | No | Yes |

// ---

// ## 4. Declaration and Initialization

// ### What is Declaration?

// Declaration means creating a variable without necessarily assigning a value.

// Example:

// ```javascript
// var a;
// let b;
// ```

// ### What is Initialization?

// Initialization means assigning the first value to a variable.

// Example:

// ```javascript
// var a = 10;
// let b = 20;
// ```

// ### Declaration and Initialization Together

// ```javascript
// let age = 21;
// ```

// Here:
// - let = Declaration keyword
// - age = Variable name
// - 21 = Initial value

// **Why do we use Declaration and Initialization?**

// Declaration se variable create hota hai aur initialization se variable ko starting value milti hai.

// ---

// ## 5. What is Scope in JavaScript?

// Scope determines where a variable can be accessed in a program.

// Simple words mein, scope batata hai ki variable program ke kis area mein accessible hai.

// **Why do we need Scope?**

// 1. Variables ko organize karne ke liye.
// 2. Naming conflicts avoid karne ke liye.
// 3. Variables ki accessibility control karne ke liye.
// 4. Code ko manageable banane ke liye.
// 5. Unnecessary global variables avoid karne ke liye.

// ### Types of Scope

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// ### A. Global Scope

// A variable declared outside functions and blocks has global scope, subject to the declaration rules.

// Example:

// ```javascript
// var a = 100;

// function show() {
//     console.log(a);
// }

// show();

// console.log(a);
// ```

// Output:

// ```text
// 100
// 100
// ```

// Why?

// Kyunki variable function ke bahar declare kiya gaya hai aur function ke andar bhi accessible hai.

// ### B. Function Scope

// A variable declared using var inside a function is accessible only within that function.

// Example:

// ```javascript
// function abc() {

//     var a = 10;

//     console.log(a);

// }

// abc();
// ```

// Output:

// ```text
// 10
// ```

// Outside access:

// ```javascript
// function abc() {
//     var a = 10;
// }

// console.log(a);
// ```

// Output:

// ```text
// ReferenceError
// ```

// Why?

// Kyunki var function scoped hota hai.

// ### C. Block Scope

// A block is created using curly braces { }.

// let and const are block-scoped.

// Example:

// ```javascript
// {
//     let a = 10;

//     console.log(a);
// }
// ```

// Output:

// ```text
// 10
// ```

// Outside access:

// ```javascript
// {
//     let a = 10;
// }

// console.log(a);
// ```

// Output:

// ```text
// ReferenceError
// ```

// Why?

// Kyunki let variable sirf apne block ke andar accessible hota hai.

// ---

// ## 6. Redeclaration and Reassignment

// ### What is Redeclaration?

// Declaring the same variable again in the same scope is called redeclaration.

// Example:

// ```javascript
// var a = 10;

// var a = 20;

// console.log(a);
// ```

// Output:

// ```text
// 20
// ```

// ### What is Reassignment?

// Changing the value of an already declared variable is called reassignment.

// Example:

// ```javascript
// let a = 10;

// a = 20;

// console.log(a);
// ```

// Output:

// ```text
// 20
// ```

// ### Redeclaration and Reassignment Rules

// var:

// ```javascript
// var a = 10;
// var a = 20;

// a = 30;

// console.log(a);
// ```

// Output:

// ```text
// 30
// ```

// let:

// ```javascript
// let b = 10;

// b = 20;

// console.log(b);
// ```

// Output:

// ```text
// 20
// ```

// Same-scope redeclaration:

// ```javascript
// let b = 10;
// let b = 20;
// ```

// Output:

// ```text
// SyntaxError
// ```

// const:

// ```javascript
// const c = 10;

// c = 20;
// ```

// Output:

// ```text
// TypeError
// ```

// **Why does const not allow reassignment?**

// Kyunki const variable binding ko reassign hone se rokta hai.

// Important: const object ya array ki properties/elements change ho sakti hain, lekin unhe kisi doosre object ya array se replace nahi kar sakte.

// ---

// ## 7. What is Hoisting?

// Hoisting is JavaScript behaviour in which variable and function declarations are processed before the code executes.

// Simple words mein, JavaScript execution se pehle declarations ko process karti hai.

// **Why does Hoisting happen?**

// JavaScript execution environment ko declarations ke baare mein pehle information chahiye hoti hai.

// ### A. var Hoisting

// Example:

// ```javascript
// console.log(a);

// var a = 10;
// ```

// Output:

// ```text
// undefined
// ```

// Conceptually:

// ```javascript
// var a;

// console.log(a);

// a = 10;
// ```

// Why?

// Kyunki var declaration hoist hoti hai aur uski initial value undefined hoti hai.

// ### B. let Hoisting

// Example:

// ```javascript
// console.log(a);

// let a = 10;
// ```

// Output:

// ```text
// ReferenceError
// ```

// Why?

// let hoist hota hai lekin initialization se pehle access nahi kar sakte.

// ### C. const Hoisting

// Example:

// ```javascript
// console.log(a);

// const a = 10;
// ```

// Output:

// ```text
// ReferenceError
// ```

// Why?

// const bhi hoist hota hai, lekin initialization se pehle access allowed nahi hota.

// Important:

// var, let aur const teeno hoist hote hain. Difference initialization aur TDZ behaviour ka hai.

// ---

// ## 8. What is TDZ (Temporal Dead Zone)?

// TDZ stands for Temporal Dead Zone.

// TDZ is the time period between entering a scope and the initialization of a let or const variable.

// Simple words mein, let aur const variable declare hone se pehle access karne par ReferenceError aata hai.

// Example:

// ```javascript
// console.log(age);

// let age = 25;
// ```

// Output:

// ```text
// ReferenceError:
// Cannot access 'age' before initialization.
// ```

// **Why does TDZ exist?**

// 1. Variables ko initialize hone se pehle use hone se rokne ke liye.
// 2. Programming mistakes avoid karne ke liye.
// 3. Code ko predictable banane ke liye.
// 4. Accidental undefined values ke bajay clear error dene ke liye.

// ---

// # PART 3: IMPORTANT SCOPE QUESTIONS FROM NOTEBOOK

// ## Q1. Global Scope with var

// ```javascript
// var x = 1;

// {
//     var x = 2;
// }

// console.log(x);
// ```

// Output:

// ```text
// 2
// ```

// Explanation:

// var block scope follow nahi karta. Dono declarations same surrounding scope ke variable ko refer karte hain.

// ## Q2. Block Scope with let

// ```javascript
// let a = 10;

// {
//     let a = 20;

//     console.log("Inside:", a);
// }

// console.log("Outside:", a);
// ```

// Output:

// ```text
// Inside: 20
// Outside: 10
// ```

// Explanation:

// let block-scoped hota hai. Isliye inner aur outer variables alag hain.

// ## Q3. Function Scope

// ```javascript
// function abc() {

//     var a = 12;

//     console.log(a);

// }

// abc();
// ```

// Output:

// ```text
// 12
// ```

// Explanation:

// var function ke andar declare hua hai aur function ke andar accessible hai.

// ## Q4. Temporal Dead Zone

// ```javascript
// console.log(age);

// let age = 25;
// ```

// Output:

// ```text
// ReferenceError
// ```

// Explanation:

// Variable initialization se pehle access hua.

// ---

// # PART 4: JAVASCRIPT OUTPUT FUNCTIONS

// ## 1. console.log()

// console.log() is used to display output in the browser console or JavaScript runtime console.

// Example:

// ```javascript
// console.log("Hello World");
// console.log(10 + 20);
// ```

// Output:

// ```text
// Hello World
// 30
// ```

// Why do we use console.log()?

// 1. Output check karne ke liye.
// 2. Variables ki values dekhne ke liye.
// 3. Code debug karne ke liye.
// 4. Errors identify karne mein help ke liye.

// ## 2. alert()

// alert() displays a popup message in the browser.

// Example:

// ```javascript
// alert("Welcome to JavaScript");
// ```

// Why do we use alert()?

// User ko important information ya message display karne ke liye.

// ## 3. prompt()

// prompt() is used to take input from the user through a browser dialog box.

// Example:

// ```javascript
// let name = prompt("Enter your name");

// console.log(name);
// ```

// Why do we use prompt()?

// User se input lene ke liye.

// Important: prompt() normally string return karta hai.

// Example:

// ```javascript
// let age = Number(prompt("Enter your age"));

// console.log(age);
// ```

// ---

// # PART 5: STRINGS IN JAVASCRIPT

// ## 1. What is a String?

// A string is a sequence of characters used to represent text.

// Example:

// ```javascript
// let name = "Vikash";

// let city = 'Bhopal';

// let course = `JavaScript`;
// ```

// JavaScript mein strings three ways se create kar sakte hain:

// 1. Double Quotes (" ")
// 2. Single Quotes (' ')
// 3. Backticks (` `)

// **Why do we use Strings?**

// 1. Names store karne ke liye.
// 2. Messages display karne ke liye.
// 3. User input store karne ke liye.
// 4. Text manipulate karne ke liye.
// 5. API se received text handle karne ke liye.

// ## 2. String length

// length property string ke total characters count karti hai.

// Example:

// ```javascript
// let str = "JavaScript";

// console.log(str.length);
// ```

// Output:

// ```text
// 10
// ```

// Why?

// String ke characters ki total quantity jaanne ke liye.

// ## 3. toUpperCase()

// String ko uppercase mein convert karta hai.

// ```javascript
// let str = "javascript";

// console.log(str.toUpperCase());
// ```

// Output:

// ```text
// JAVASCRIPT
// ```

// Why?

// Text ko capital letters mein display karne ke liye.

// ## 4. toLowerCase()

// String ko lowercase mein convert karta hai.

// ```javascript
// let str = "JAVASCRIPT";

// console.log(str.toLowerCase());
// ```

// Output:

// ```text
// javascript
// ```

// Why?

// Text ko small letters mein convert karne ke liye.

// ## 5. slice()

// slice() string ka particular portion extract karta hai.

// Syntax:

// ```javascript
// string.slice(start, end);
// ```

// Example:

// ```javascript
// let str = "JavaScript";

// console.log(str.slice(0, 4));
// ```

// Output:

// ```text
// Java
// ```

// Why?

// String mein se required characters extract karne ke liye.

// ## 6. replace()

// replace() string ke particular text ko replace karta hai.

// Example:

// ```javascript
// let str = "Hello Java";

// console.log(str.replace("Java", "JavaScript"));
// ```

// Output:

// ```text
// Hello JavaScript
// ```

// Why?

// Existing text ko new text se replace karne ke liye.

// ## 7. includes()

// includes() check karta hai ki string mein particular text present hai ya nahi.

// Example:

// ```javascript
// let str = "JavaScript";

// console.log(str.includes("Script"));
// ```

// Output:

// ```text
// true
// ```

// Why?

// Text search aur checking ke liye.

// ## 8. split()

// split() string ko array mein divide karta hai.

// Example:

// ```javascript
// let str = "HTML CSS JavaScript";

// console.log(str.split(" "));
// ```

// Output:

// ```text
// ["HTML", "CSS", "JavaScript"]
// ```

// Why?

// String ko multiple parts mein divide karne ke liye.

// ## 9. trim()

// trim() string ke starting aur ending spaces remove karta hai.

// Example:

// ```javascript
// let str = "  Hello World  ";

// console.log(str.trim());
// ```

// Output:

// ```text
// Hello World
// ```

// Why?

// User input ke unnecessary spaces remove karne ke liye.

// ## 10. Template Literals

// Template literals use backticks (` `).

// Inki help se hum strings ke andar variables aur expressions directly insert kar sakte hain.

// Example:

// ```javascript
// let name = "Vikash";

// let age = 21;

// console.log(`My name is ${name} and my age is ${age}`);
// ```

// Output:

// ```text
// My name is Vikash and my age is 21
// ```

// Why do we use Template Literals?

// 1. Variables ko strings mein easily insert karne ke liye.
// 2. String concatenation ko simple banane ke liye.
// 3. Multiline strings create karne ke liye.
// 4. Code readability improve karne ke liye.

// ---

// # PART 6: IMPORTANT JAVASCRIPT RULES

// 1. JavaScript is case-sensitive.
// 2. Variable names cannot start with a number.
// 3. Variable names can contain letters, digits, underscore and dollar sign.
// 4. Reserved keywords cannot be used as variable names.
// 5. let and const are block-scoped.
// 6. var is function-scoped.
// 7. const variables must be initialized during declaration.
// 8. JavaScript strings are immutable.
// 9. JavaScript objects and arrays are mutable.
// 10. JavaScript uses curly braces to define blocks.
// 11. Semicolons are optional in many cases, but using them consistently is recommended.
// 12. JavaScript uses dynamic typing.

// ---

// # PART 7: IMPORTANT DIFFERENCES

// ## 1. JavaScript vs Java

// | JavaScript | Java |
// |---|---|
// | Dynamically typed | Statically typed |
// | Commonly used in web development | Used in many types of applications |
// | JavaScript engines execute JS | JVM executes Java bytecode |
// | Supports prototype-based inheritance | Supports class-based inheritance |
// | Uses .js extension | Uses .java extension |

// ## 2. Compiler vs Interpreter

// | Compiler | Interpreter |
// |---|---|
// | Translates source code into another form | Processes and executes code at runtime |
// | Can generate machine code | Can execute instructions during runtime |
// | Traditional example: C compiler | Traditional example: Python interpreter |

// Note: Modern language implementations may combine both techniques.

// ## 3. Declaration vs Initialization

// | Declaration | Initialization |
// |---|---|
// | Variable create karna | First value assign karna |
// | let a; | let a = 10; |
// | Value dena necessary nahi | First value assign hoti hai |

// ## 4. Redeclaration vs Reassignment

// | Redeclaration | Reassignment |
// |---|---|
// | Same variable ko dobara declare karna | Existing variable ki value change karna |
// | var a = 10; var a = 20; | let a = 10; a = 20; |

// ## 5. Global Scope vs Function Scope vs Block Scope

// | Global Scope | Function Scope | Block Scope |
// |---|---|---|
// | Global area mein accessible | Function ke andar accessible | Specific block ke andar accessible |
// | Global declarations | var inside function | let and const inside block |

// ---

// # PART 8: WHY QUESTIONS – JAVASCRIPT INTERVIEW PREPARATION

// **Q1. Why do we use JavaScript?**

// JavaScript is used to make websites interactive, dynamic and functional.

// **Q2. Why do we use variables?**

// Variables are used to store, access and manipulate data in a program.

// **Q3. Why do we use let?**

// let is used when we need a block-scoped variable whose value may change.

// **Q4. Why do we use const?**

// const is used when we do not want to reassign a variable.

// **Q5. Why do we use var?**

// var is an older way to declare variables. It is function-scoped and allows redeclaration.

// **Q6. Why do we use scope?**

// Scope controls variable accessibility and prevents naming conflicts.

// **Q7. Why does JavaScript have hoisting?**

// Hoisting is part of JavaScript's declaration-processing behaviour, which makes declarations available according to their scope rules.

// **Q8. Why does TDZ exist?**

// TDZ prevents let and const variables from being accessed before initialization.

// **Q9. Why do we use functions?**

// Functions help us reuse code, reduce repetition and organize program logic.

// **Q10. Why do we use DOM?**

// DOM allows JavaScript to access and modify HTML documents.

// **Q11. Why do we use console.log()?**

// It is used to display output and debug JavaScript code.

// **Q12. Why do we use template literals?**

// They make string interpolation and multiline strings easier.

// **Q13. Why do we use external JavaScript?**

// It separates JavaScript from HTML and improves code reusability and maintainability.

// **Q14. Why do we use ECMAScript?**

// It defines the standard and specifications for JavaScript.

// **Q15. Why do we use ES6?**

// ES6 introduced modern features that make JavaScript code more readable and maintainable.

// **Q16. Why is JavaScript called dynamically typed?**

// Because variable types are determined at runtime and a variable can hold values of different types at different times.

// **Q17. Why is JavaScript case-sensitive?**

// Because JavaScript treats uppercase and lowercase letters as different characters in identifiers.

// **Q18. Why do we use string methods?**

// String methods help us search, extract, replace and transform text.

// **Q19. Why do we use alert()?**

// To display a message in a browser dialog box.

// **Q20. Why do we use prompt()?**

// To take input from the user through a browser dialog box.

// ---

// # PART 9: JAVASCRIPT LEARNING ROADMAP – NEXT TOPICS

// After completing Day 01, study JavaScript in this order:

// ## Day 02 – Data Types

// 1. What are Data Types?
// 2. Primitive Data Types.
// 3. String.
// 4. Number.
// 5. Boolean.
// 6. Undefined.
// 7. Null.
// 8. BigInt.
// 9. Symbol.
// 10. Non-Primitive Data Types.
// 11. Objects.
// 12. Arrays.
// 13. typeof Operator.

// ## Day 03 – Type Conversion

// 1. Type Conversion.
// 2. Explicit Conversion.
// 3. Implicit Conversion.
// 4. Type Coercion.
// 5. String to Number.
// 6. Number to String.
// 7. Boolean Conversion.
// 8. Truthy Values.
// 9. Falsy Values.

// ## Day 04 – Operators

// 1. Arithmetic Operators.
// 2. Assignment Operators.
// 3. Comparison Operators.
// 4. Logical Operators.
// 5. Increment and Decrement.
// 6. Ternary Operator.
// 7. Nullish Coalescing Operator.
// 8. Optional Chaining.

// ## Day 05 – Conditional Statements

// 1. if.
// 2. if-else.
// 3. else-if.
// 4. Nested if.
// 5. switch.
// 6. Ternary Operator.

// ## Day 06 – Loops

// 1. for Loop.
// 2. while Loop.
// 3. do-while Loop.
// 4. for...in.
// 5. for...of.
// 6. break.
// 7. continue.

// ## Day 07 – Functions

// 1. What are Functions?
// 2. Function Declaration.
// 3. Function Expression.
// 4. Arrow Functions.
// 5. Parameters.
// 6. Arguments.
// 7. Return Statement.
// 8. Default Parameters.
// 9. Callback Functions.
// 10. Higher-Order Functions.

// ## Day 08 – Arrays

// 1. What is an Array?
// 2. Array Indexing.
// 3. push().
// 4. pop().
// 5. shift().
// 6. unshift().
// 7. splice().
// 8. slice().
// 9. map().
// 10. filter().
// 11. reduce().
// 12. forEach().
// 13. find().
// 14. some().
// 15. every().
// 16. sort().

// ## Day 09 – Objects

// 1. What are Objects?
// 2. Object Properties.
// 3. Object Methods.
// 4. Accessing Properties.
// 5. Adding Properties.
// 6. Deleting Properties.
// 7. Object Destructuring.
// 8. Spread Operator.
// 9. Rest Operator.
// 10. Object.keys().
// 11. Object.values().
// 12. Object.entries().
// 13. Shallow Copy.
// 14. Deep Copy.

// ## Day 10 – Advanced JavaScript

// 1. Execution Context.
// 2. Call Stack.
// 3. Lexical Environment.
// 4. Scope Chain.
// 5. Closures.
// 6. this Keyword.
// 7. call().
// 8. apply().
// 9. bind().
// 10. IIFE.
// 11. Recursion.
// 12. Prototypes.
// 13. Prototype Chain.
// 14. Classes.
// 15. Inheritance.
// 16. Encapsulation.
// 17. Error Handling.

// ## Day 11 – DOM

// 1. DOM Introduction.
// 2. DOM Tree.
// 3. Selectors.
// 4. getElementById().
// 5. querySelector().
// 6. querySelectorAll().
// 7. innerHTML.
// 8. innerText.
// 9. textContent.
// 10. CSS Manipulation.
// 11. classList.
// 12. createElement().
// 13. appendChild().
// 14. remove().
// 15. setAttribute().
// 16. DOM Traversing.

// ## Day 12 – Events

// 1. What are Events?
// 2. onclick.
// 3. addEventListener().
// 4. Mouse Events.
// 5. Keyboard Events.
// 6. Input Events.
// 7. Form Events.
// 8. Event Object.
// 9. Event Bubbling.
// 10. Event Capturing.
// 11. Event Delegation.
// 12. preventDefault().
// 13. stopPropagation().

// ## Day 13 – Asynchronous JavaScript

// 1. Synchronous JavaScript.
// 2. Asynchronous JavaScript.
// 3. Callbacks.
// 4. Callback Hell.
// 5. Promises.
// 6. Promise States.
// 7. then().
// 8. catch().
// 9. finally().
// 10. Promise Chaining.
// 11. Promise.all().
// 12. Promise.race().
// 13. async.
// 14. await.
// 15. Event Loop.
// 16. Microtask Queue.
// 17. Macrotask Queue.

// ## Day 14 – API and Storage

// 1. What is API?
// 2. HTTP Methods.
// 3. GET.
// 4. POST.
// 5. PUT.
// 6. PATCH.
// 7. DELETE.
// 8. Fetch API.
// 9. JSON.
// 10. API Integration.
// 11. Local Storage.
// 12. Session Storage.
// 13. Cookies.

// ## Day 15 – Projects

// 1. Calculator.
// 2. Digital Clock.
// 3. To-Do List.
// 4. Form Validation.
// 5. Weather Application.
// 6. Quiz Application.
// 7. Expense Tracker.
// 8. Notes Application.
// 9. Shopping Cart.
// 10. GitHub Profile Finder.

// ---

// # FINAL INSTRUCTIONS

// JavaScript seekhne ke liye sirf theory padhna sufficient nahi hai.

// Har topic ke liye:

// 1. Definition samjho.
// 2. Why samjho.
// 3. Syntax yaad karo.
// 4. Examples khud likho.
// 5. Output predict karo.
// 6. Errors solve karo.
// 7. Minimum 5–10 practice questions solve karo.
// 8. Ek chhota project banao.

// **Golden Rule:**

// Learn → Understand → Write Code → Find Errors → Debug → Build Projects.

// JavaScript mein strong banne ke liye code khud likhna sabse important hai.