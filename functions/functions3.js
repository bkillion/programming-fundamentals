let userName = "Albert";
let greeting;

//defining function
const greetPlayer = (name, punct) => "Greetings " + name + punct();

const askQuestion = () => "??";

const greetNoPunct = name => "Hello " + name;

//Calling function
greeting = greetPlayer(userName, askQuestion);
console.log("returned value: ", greeting);

console.log(greetNoPunct("Brian"));
