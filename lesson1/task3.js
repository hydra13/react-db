// 3. Необходимо написать иерархию классов вида:
// Human -> Employee -> Developer
// Human -> Employee -> Manager
// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), 
// а также методы по удалению/добавлению разработчиков.
// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера 
// (имеется ввиду возможность назначить другого менеджера).
// У класса Human должны быть следующие параметры: name (строка), age (число), 
// dateOfBirth (строка или дата)
// У класса Employee должны присутствовать параметры: salary (число), department (строка)
// В классе Human должен присутствовать метод displayInfo, который возвращает 
// строку со всеми параметрами экземпляра Human.
// В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый 
// метод и дополняет его параметрами из экземпляра Employee
// Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee 
// написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку 
// с параметрами Human'a.

class Human {
    constructor() {
        this.name = '';
        this.age = 0;
        this.dateOfBirth = '';
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
    setAge(newAge) {
        this.age = newAge;
    }
    getAge() {
        return this.age;
    }
    setDateOfBirth(newDate) {
        this.dateOfBirth = newDate;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    displayInfo() {
        return `name: ${this.name}\n` +
            `age: ${this.age}\n` +
            `dateOfBirth: ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor() {
        super();
        this.salary = 0;
        this.department = '';
    }

    setSalary(newSalary) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
    setDepartment(newDep) {
        this.department = newDep;
    }
    getDepartment() {
        return this.department;
    }
    displayInfo() {
        return `${super.displayInfo()}\n` +
            `salary: ${this.salary}\n` +
            `department: ${this.department}`;
    }
}

class Manager extends Employee {
    constructor() {
        super();
        this.employees = [];
    }
    addEmproyee(newEmp) {
        this.employees.push(newEmp);
    }
    removeEmployee(emp) {
        const index = this.employees.findIndex(emp);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }
    getEmployees() {
        return this.employees;
    }
    getEmployee(idx) {
        return this.employees[idx];
    }
}

class Developer extends Employee {
    constructor() {
        super(arguments)
        this.manager = null;
    }
    setManager(newMng) {
        this.manager = newMng;
    }
    getManager() {
        return this.manager;
    }
}

const mng = new Manager();
mng.setName('Ivan');
mng.setAge(59);
mng.setDateOfBirth('22.03.1960');
mng.setSalary(13000);
mng.setDepartment('Sales')
console.log(mng.displayInfo());
// OUTPUT:
// name: Ivan
// age: 59
// dateOfBirth: 22.03.1960
// salary: 13000
// department: Sales