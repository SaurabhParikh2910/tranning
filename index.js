// let gender=prompt("Enter Your Gender Male/Female.");
//  gender=gender.toLowerCase();
// let discount=0;
//  if(gender == "male"){
//  console.log("You are male");
//  let age =prompt("Enter yuor Age");
//             if(age>26){
//               console.log("Your Age is Above 26 Years");
//               discount=10
//             }
//             else if(age<26){
//                 console.log("Your Age id Below 26 Years");
//                 discount=5

//             }
//             else if(age ==26){
//                console.log("Your Age is 26 Year");
//                discount=12
//             }
//             else
//             {
//                 console.log("Try Again");
//             }
//         }        
//  else if(gender =="female"){
//     let choice=prompt("Enter Your Choice HL/BL");
//     choice =choice.toUpperCase();
//     if(choice == "HL"){
//        console.log("You Select HollyWood Movies");
//        discount=20
//     }
//     else if(choice == "BL"){
//         console.log("You Select BollyWood Movies");
//         discount=10
//     }
//     else{
//         console.log("Try Again");
//     }

//  }
//  else{
//     console.log("try Again")
//  }

//  let price=parseFloat(prompt("Enter MArket Price:"));

//  let discont_price=price*discount*0.01;

//  let pay_price=price-discont_price;

//  console.log(`You Have to Pay Only Rs. ${pay_price} `);


// let data="welcome to Java Script";
// console.log(data.split(" "));

function Localstorage(){
    localStorage.setItem("username",document.getElementById("username").value);
    localStorage.setItem("Password",document.getElementById("password").value);

    let user=localStorage.getItem("username");
    let password=localStorage.getItem("Password");

    document.write(`wel come ${user} and your password id ${password}`);
}
