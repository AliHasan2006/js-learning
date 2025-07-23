let equityCheck = 3;
switch (equityCheck) {
    case 1:
        console.log("You'r belongs to the First Class => Top Class");
        break;
        case 2:
            console.log("You'r belongs to the Second Class => Middle Class");
            break;
            case 3:
                console.log("You'r belongs to the Third Class => Poor Class");
                break;
    default:
        console.log("You'r belongs to the Very Poor Class");
        
        break;
}

const greetings = "Hello World"
for (const greet of greetings) {
    if (greet == " ") {
      continue;   
    }
    console.log(`${greet}`);
}