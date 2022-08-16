// 1.Interface creates a new type,describing the property name and value types of an object.
// 2.Example
// note: 1.we can define any data type inside the interface eg.Date,function object etc.
//       2.we can also reuse the interface 
interface Reportable {
  // name:string;
  // year:Date;
  // broken:boolean,
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name : ${this.name}`;
  },
};

const drink={
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink)
