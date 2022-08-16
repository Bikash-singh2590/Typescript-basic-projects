// 1.definition

// 2.example
// annotation
const carMakers:string[]=['ford','toyota','tata']
// inference
const carMakers2=['ford','toyota','tata']

// 2d array annotation
const carsByMake:string [][]=[]

//3. Why do we care?
// i).Helps with inference when extracting values
const cars =carMakers[0]
const myCar=carMakers.pop()

// ii).Prevent incompatible values
// carMakers.push(100)   -error

//iii). Help with map,forEach ,reduce 
carMakers.map((car:string):string=>{
return car.toLocaleLowerCase()      //helps to suggest fn by typescript or vs code
})

// iv).Flexible Array (Multiple type in array)

const importantsDates:(Date | string)[]=[new Date(),'04-07-2022'] //using OR( | ) symbol we can use multiple value of array
importantsDates.push('05-07-2022')
importantsDates.push(new Date())
// importantsDates.push(100) -error