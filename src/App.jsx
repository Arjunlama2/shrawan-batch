import React from "react";

function App() {
  /// data type

  // Number
  // let number=82.3
  // String

  // let myname="skillspark"
  // let mysecondname='skillspark'
  // let myLastName=`sankhamul`

  // Bolean
  // let isfine=true
  //  isfine=fale

  // array

  // let Details={
  //   name : 'ram',
  //   age : 2

  // }
  // console.log(Details)

  // const alldetails = [
  //   {
  //     name: "ram",
  //     age: 2,
  //   },
  //   {
  //      name: "siita",
  //     age: 2,
  //     otherfriends:["gita","shyam"]
  //   }
  // ];

  // create array of object representing restro menu

  const menu = [
    {
      category: "breakfast",
      menu: [
        {
          name: "onda chana",
          price: 30,
        },
        {},
      ],
    },

    {
      category: "lunch",
      menu: [
        {
          name: "Dal Bhata",
          price: 300,
        },
        {
          name: "Dhido",
          price: 400,
        },
      ],
    },
  ];

  // console.log(menu)

  //loop

  // for(let i=10;i>0; i--){
  //   console.log(i)
  // }

  // let i=1
  // while(i<=10){
  //   console.log(i)
  //   i++
  // }

  // console.log(menu.length)
  // for(let i=0;i<=menu.length-1; i++){
  //   console.log(menu[i].menu)
  // }

  let myfriends = [
    {
      name: "Ram",
      age: 18,
      address: "kathmandu",
    },
    {
      name: "krishna",
      age: 25,
      address: "bhaltapur",
    },
    {
      name: "Shyam",
      age: 25,
      address: "bhaltapur",
    },
  ];

  // myfriends.splice(1,1)

  // console.log(myfriends)
  //iterative
  // forEach


  // double the Numbers

  const numbers=[5,8,46,28,57]

  // output
  // 10,16,..  using for each

//   numbers.forEach((el)=>{
// console.log(el*2)
//   })

let brands = ["apple", "samsung", "lG", "Nokia"]



// console.log("In second element, we have", brands[1])
console.log(`In second element, we have ${brands[1]}`) // template litterals


// let students = [
//     {
//         roll: 1,
//         courses: ["Web", "Mobile"]
//     },
//     {
//         roll: 2,
//         courses: ["Machine Learning", "Mobile"]  // change mobile to Artificial intelligence via code
//     }
// ]

// students[1].courses[1]="Artificial intelligence"


console.log(students)

  return (
    <div>
      {/* {myfriends?.map((el) => (
        <p>{el.name}</p>
      ))} */}


      js
    </div>
  );
}

export default App;
