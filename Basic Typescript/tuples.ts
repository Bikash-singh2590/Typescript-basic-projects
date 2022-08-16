//1. Definition
// Array-like structure where each element represents some property of a record.

//2.example
const drinks={
color:'brown',
carbonated:true,
sugar:40
}

// Type alias
type Drink=[string,boolean,number]
// const pepsi:[string,boolean,number]=['brown',true,40]
// pepsi[0]=40 -error ?  0 index always stirng 
const pepsi:Drink=['brown',true,40]
const sprite:Drink=['clear',true,40]
const tea:Drink=['brown',false,40]


//3.