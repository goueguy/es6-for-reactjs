 {/* Déclarations */}
 //String
//  let name = "Elon";
//  let firstName = "Musk";
//  let completeName = name+" "+firstName;

 //Number
 const number = 1;

 // Boolean
 let status = true;

 // Null

 let response = null;

 //Object
 const userData = {
    name:"Toto",
    lastName:"Toto",
    year:2024
 };

 userData.year = 2025;
 //number = 2;
 const arrayNumber = [1,2,3,4];

 //Date Object

 const date = new Date("2022-03-25");

 // Destructuration d'un objet
 
 const cat = {
    name:"Mimi",
    age:10,
    color:"white"
 };

 //Destructuration de tableau

//  const [un,deux,three,four] = arrayNumber;

 //console.log(un,deux,three,four);

 const animals = {
    cat:{
        name:"Catty",
        age:12,
        children:[
            {
                name:"Mimi",
                age:3,
                color:"White"
            },
            {
                name:"Momo",
                age:3,
                color:"Red"
            },
        ]
    },
    count:13
 };

 const {cat:{name:nickname,age,children:{name}},count} = animals;

 console.log(nickname,age,count);

 const nestedArray = [1,2,[3,4],5];

 const [one,two,[three,four],five] = nestedArray;

 console.log(one,two,three,four,five);

 for( let [key,value] of Object.entries(cat)){
    console.log(key,value);
 }

const note = {
    title:"My First Note",
    author:{
        firstName:"Sherlock",
        lastName:"Holmes"
    },
    tags:["personal","writing","investigations"]
}

