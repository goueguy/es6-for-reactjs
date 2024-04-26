
const Phrase = {
    greeting:"Hello",
    pronoun:"I",
    be:"am",
    fullName:"GOUEGUY Jean-Louis Alexis"
};

const Person = {
    fullName:"Aklade KOUASSI Sosthene",
    place:{country:"Ivory Coast",city:"Abidjan"},
    job:"Developer",
    hobbies:["Music","Football","Technology Watch"]
};

let nickname = "name";

const greeting = ({name: fullName="John Doe", job:profession="Web Designer"})=>`Hello, I'm ${fullName} and I'm a ${profession}`;

greeting({name:"GOUEGUY",job:"Web Designer"});

const person = ()=>{
    return {
        fullName:"GOUEGUY Jean-Louis Alexis",
        job:"Full Stack Developer",
        age:140
    }
};

// console.log(fullName,job,age);

const [name,...rest] = ["GOUEGUY JEAN-LOUIS ALEXIS","IVORY COAST","IVORIAN"];

//const [name,country,nationality] = User;

//console.log(name);

const getArrayValue = ()=>{
    return ["GOUEGUY JEAN-LOUIS ALEXIS","IVORY COAST","IVORIAN"];
}

const [fullName, ,nationality] = getArrayValue();

console.log(fullName,nationality);