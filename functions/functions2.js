var userName = "Albert";
let greeting;

//defining function
function greetPlayer(name, punct) {
    // console.log("Greetings Player" + name + punct);

    return "Greetings Player" + name + punct;
}

//Calling function
// greetPlayer(userName, "!");
greeting = greetPlayer(userName, "!");
console.log("captured value: ", greeting);