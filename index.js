//learn foreach map function

//1 find the array of each element
let str=["apple","mango","guava"];
str.map(function(array){
    // console.log(array.length)
})

//or

let strr=["apple","mango"]
strr.forEach((array)=>{
    // console.log(array.length)
})

//2 print the element of even index
let arr=[1,2,4,5,7,6,8,9]
let array=[]
for(let i=0;i<arr.length;i++){
    if(i%2==0 && arr[i]%2==0){
        array.push(arr[i])
    }
}
// console.log(array)

 //3 find the first letter of element

 let string=["Anshu","Sunita"];
 let arrr=[];
 for(let i=0;i<string.length;i++){
    arrr.push(string[i][0]);
 }
 //console.log(arrr)

 //print first and last char 

 let ar=["problem","solving","assignment"]

 let aa=[];
 for(let i=0;i<ar.length;i++){
    if(ar[i][0]=="a"||ar[i][ar[i].length-1]=="a"){
        aa.push(ar[i])
    }
 }

//  console.log(aa)


//find the odd sum of element

let a=["Anshu","anu"];

let sum=0;
for(let i=0;i<a.length;i++){
    if(a[i].length%2!=0){
        sum+=a[i].length;
    }
}
// console.log(sum)


//print the double of number

let num=[1,2,3]

let result=num.map((ele)=>{
    return ele*2
})   // if i used forEach instead of map it gives undefined
//console.log(result)

// print the name of people whose palce is same

let people=[
    {firstname:"Anshu", lastname:"kumari",place:"bengaluru"},
    {firstname:"Anu",lastname:"choudhary",place:"Ranchi"}
];

let A=people.filter((ele)=>{
    return(ele.place=="Ranchi")
})
.map((ele)=>{
    return(ele.firstname+" "+ele.lastname)
})
//console.log(A)

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  let ars=users.map(function(el){
    return (el.firstName+" "+el.lastName)
  })
//   console.log(ars)

  //print odd number

  let number=[1,2,3,4,5]
  let res=number.filter((ele)=>{
    return ele%2==1 //map gives the result true or false
  })
//   console.log(res)

let num2=[2,4,6]

let res2=num2.reduce((acc,ele)=>{
    return acc*ele;
})
// console.log(res2)

//print the square of number

let num3=[1,2,3,4]
let res3=num3.map((ele)=>{
    return ele*ele;
})
// console.log(res3)

//print the sum of cube of the number

let number2=[1,2,3,4,5,6]

let res4=number2.filter((el)=>{
    return el%3==0;
})
let ress=res4.reduce((acc,el)=>{
    return((acc*3+el*3)+(acc*3+el*3)+((acc*3+el*3)))*3
})

// console.log(ress)


//print the sum of odd number

let number3=[1,2,3,4];

let result3=number3.filter((el)=>{
    return el%2==1;
})
let result4=result3.reduce((acc,el)=>{
    return acc+el;
})
console.log(result4)
