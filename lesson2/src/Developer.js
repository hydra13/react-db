import React from 'react';

class Developer {
    constructor() {
        this.name = arguments[0] || '';
        this.surname = arguments[1] || '';
        this.middleName = arguments[2] || '';
    }

    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getSurname() {
        return this.surname;
    }
    setMiddleName(middleName) {
        this.middleName = middleName;
    }
    getMiddleName() {
        return this.middleName;
    }
    sayHi() {
        console.log(`Hi! I'm ${this.surname} ${this.name} ${this.middleName}`);
    }
    getMadeLabel() {
        return <h3>Made by {this.surname} {this.name}</h3>
    }
}

export default Developer