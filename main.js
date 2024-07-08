//                 **********Step00 _helloworld************                 Simple Print
let message = "Hello World";
console.log(message); // Infering Types, 
//take your cursor on the variable name
let userName = "Ahsan01";
console.log(userName);
// Inferring is a type of inference that does not tell you what the data is and relies on its limitations is called
// inference data type...
let discount = 24;
console.log(discount);
let admin = false;
console.log(admin);
let nameOflist = ["ahsan", "Danish", "khan"];
let userDetail = ["ahsan", true, 45];
let userInfo = {
    name: "Arsalan",
    email: "arsalan123@gmail.com",
    login: true,
    address: {
        city: "karachi",
        country: "Pakistan"
    }
};
console.log(userInfo.address.country);
//                 ******** Step 00a **********  "JSON"...
// JSON data consists of key/value pairs similar to JavaScript object properties.
// The key and values are written in double quotes separated by a :.
let wetherUpdate = {
    "Date": 8 - 7 - 2024,
    "Temperature": "Summer",
    "min": "40c",
    "max": 60
};
console.log(wetherUpdate.Temperature);
let books = {
    "title": "The Development of Metaphysics in Persia (1908)",
    "author": "Alama Iqbal",
    "Available": true,
};
console.log(books);
//                   Nested "JSON"   OBJECT...
let SignUp = {
    "firstName": "Ali",
    "lastName": "Haider",
    "Email": "alihaider3344@gmal.com",
    "address": {
        "city": "Lahore",
        "country": "Pakistan",
    },
    "About": {
        "datail": "I am Mern stack Developer",
        "Experience": 5
    },
};
console.log(SignUp.address.country);
//                   *********** step 00b *************       "Syntex Error...""
// leet name = "ahsan",
// functionc bio(message:string){
//     console.log("ahsan"+""+message);                      // Syntex Error...
// }bio("kase ho")
// for(i=0;i<10;i++){
// console.log(i)
// }
// enum person ={
//     name:string,
//     fName:string
// }
//                       ************ Step 00c ***********  "Type_Error...""
// let message1:number="ahsan";
// function login1(name){
//    console.log("hello",nmea);
// }
// let arr1: number = [1,2,3,4]
// console.log(arr1["one"]);
// let obj:{name:string,present:boolean}={
//     name:23,
//     present:true
// }
// let fatherName:string="Hussain",
// console.logg(fatherName);
//                      ********* Step 00d **********       "Assignbility Array.."
// let message: string = "Hello World";
// message = 6; // Error: Type 'number' is not assignable to type 'string'.
// console.log(message);
// let Available:boolean=true
// Available="Yes I am Availble"
//  let greeting :number =123
//  greeting="Hey"
// let color:boolean =true;
// color=00001
// console.log(color);
// let name :string="ahsan"
// name=false
// console.log(name);
//           ******** Step01 *********        "Strong Typing"
// In this step, every time I write the data type, so that when you run it, there is error, you 
// will know that it is wrong value
let colors = ["Ahsan", "Ali", "Danish", "Azan", "Arsalan"]; // these are mentioned data type so its strong
console.log(colors); // type syntex...
let isDone = true;
let binarayNo = 0;
const user = {
    name: "ali Haider",
    firstName: "Ali",
    lastName: "Haider",
    Rollno: 234,
    age: 30,
    available: true
};
function addition(num1, num2) {
    return num1 + num2;
}
let print1 = addition(23, 45);
console.log(print1);
//                          ************step02*************        "Const" && "Let"   "Variable"
//use const where variable values do not change Resign
//           ***CONST***
const portfolio = "My Web";
const staticWebsite = "Resume Web";
const yourName = "Hamza";
//           ***LET***                //I suggest use let instead of var everywhere, 
//becuase let has blocked scope
let dynamic = "Daraz Store";
dynamic = "Amazone";
let nickName = "Bobby";
nickName = "King Babar Azam";
let laptop = "windows";
laptop = "Mac Os";
//                          ************* Step03a ************          "Modules"
// With Modle you can add your own code to any files in your own directory.
export function subtraction(sub1, sub2) {
    console.log(sub1 - sub2);
}
export let increment = 0;
for (let increment = 0; increment < 10; increment++) {
    console.log(increment);
}
export let a = 2;
export let b = 3;
export const c = 4;
//                         ************** Step03b *************        "Native_ECMAScript_Modules"
// It took data from 2 files and transferred one file
let d = 5;
export default d;
//                        ************** Step03c *************          "Import_Inquirer_ECMAScript_Module"
// Inquirers learn to ask your influencer something by reducing your effort to meet your influencer's connection.
// The inquirer always takes a prompt..
// import inquirer from "inquirer";                        //instal inquirer and inquirer types "npm i inquirer"
// let result = await inquirer.prompt([                    // "npm i --save-dev @types/inquirer"
//     name: "favNumber",
//     type: "number",                                            //I have imported the Inquirer so that you can run                      
//     message: "What is Your Fav Number :"                       // the Inquirer in your file.                                                            
// ]);
// console.log(result.favNumber);
// let answers = await inquirer.prompt([
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"
// ]);
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
//                         ************ Step03d **********         "CHALK"
//With the help of chalk, this make-up terminal may be taught a by coloring it up.You can learn by coloring 
// the chalk make-up terminal
// install the chalk       "npm i chalk"
import chalk from "chalk";
console.log(chalk.green.bold("My Fav Crickter Is Babar Azam"));
let Array = [1, 2, 3, true, "Ahsan", 23];
console.log(chalk.blue(Array));
let table = 9;
for (let i = 0; i <= 10; i++) {
    console.log(chalk.black.bold(`9 X ${i} = ${table * i} `));
}
let computer = {
    ram: "16GB",
    rom: "SSD",
    graphicCard: 4,
};
console.log(chalk.yellow.bold(computer.ram));
//                            ************ Step04 *************       ""
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
//myname = true; //Error
//myname = 3; //Error
let print2;
let x = 5;
let y = 2;
let z;
z = ++x + x++ + --y + y-- + x + y++ + y;
console.log(z);
function dataDet(data) {
    console.log(data);
}
dataDet("Javascript");
dataDet(2023);
function move(direction) {
    console.log(direction);
}
// invoking
move("Up");
move("Down");
//                          ************ Step05a ***********                   ""OBJECT"...
// If we want to specify the properties of any particular object, then we do it as an object
let Developer = {
    name: "Arsalan",
    skill: "Software Engineer",
    experience: "5year"
};
console.log(Developer.name);
Developer = {
    name: "Hamza",
    skill: "Front-end-Engineer",
    experience: "3year+"
};
console.log(Developer.skill);
console.log(Developer.experience);
let student = {
    name: "Danish",
    learning: "Gen Ai",
    feild: "Cs"
};
student = {
    name: "ahsan",
    learning: "Block Chain",
    feild: "CS"
};
console.log(student.learning);
console.log(student.name);
//   object literal..
let jungFood;
jungFood = "Pizza";
console.log(jungFood);
// Nested Object...
let giaic = {
    feild: "Computer Science",
    intrument: {
        mic: 2,
        pcs: 34,
    },
    faculty: {
        ts: 3,
        teacher: "Sir Hamza"
    },
    ceo: "Sir Danial Nagori",
    student: {
        onsite: 50,
        online: 450000
    }
};
console.log(giaic.student.onsite);
console.log(giaic.faculty);
let room = {
    chairs: 3,
    bethsheetColor: "Red",
    sofas: 2,
    table: true
};
console.log(room.chairs);
let song = {
    songName: "Gumaan",
    author: {
        name: "Talha Anjum",
        age: 28,
    },
    online: true,
    youtuber: true,
    partner: "Talha Younus"
};
console.log(song.author.name);
console.log(song.partner);
let storeOwner = {
    name: "Ayaz"
};
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let courseDetail = {
    name: "Gen Ai",
    quater1: "TypeScript",
    Quaterlast: "Pyton",
    teacher: "Sir Hamza Alvi",
    onsite: true
};
console.log(courseDetail.teacher);
//                          ************ Step05d **************                  "Nested_objects"
// Creating an object inside an object and taking it deep is called a nested object
let Book = {
    bookName: " (The Secrets of the Self)",
    author: {
        name: "Alama Iqbal",
        age: 28,
    },
    peotry: true,
    pakistani: true,
    partner: false
};
console.log(Book.author.name);
console.log(Book.partner);
const myBook = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
};
let purchased = {
    name: "HP",
    genration: 11,
    core: "i9",
    founder: "American",
    published: 2020
};
