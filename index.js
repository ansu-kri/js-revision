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

