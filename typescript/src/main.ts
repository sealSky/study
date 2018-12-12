class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName)
  {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  fullName?: any
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName + person.fullName;
 }

 let user = new Student('Tom', "M.", "User");
console.log(greeter(user));

document.body.innerHTML = greeter(user);