person1={
    firstName:"John",
    lastName:"Doe",
    age:23,
    phones:[]
};
person2={
    firstName:"Michael",
    lastName:"Scott",
    age:29,
    phones:[]
};

const fullName = function () {
    return `${this.firstName} ${this.lastName}`
};
console.log(fullName.call(person1));

console.log(fullName.apply(person1,["ali","moradi"]));

const addPhone =function (num) {
    return `${this.phones.push(num)}`
}
console.log(addPhone.call(person1,0937678));
console.log(addPhone.apply(person2,[98320456]));