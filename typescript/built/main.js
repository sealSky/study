var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + person.fullName;
}
var user = new Student('Tom', "M.", "User");
console.log(greeter(user));
document.body.innerHTML = greeter(user);
//# sourceMappingURL=main.js.map