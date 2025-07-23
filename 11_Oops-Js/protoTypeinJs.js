const employee = {
    calCTax : (salary) => {
        const salaryAfterTax = salary
 console.log(`Salary after 10% Tax => ${salaryAfterTax}`);
    }
}

const employee1=  {
 id : "B01",
 salary : 50000,
 printSalaryWithoutTax : function(){
    console.log(`The Salary Without Tax is : ${this.salary}`);
    // calCTax(this.salary);
 }
}

// console.log(employee1.printSalaryWithoutTax());
employee1.printSalaryWithoutTax();
employee1.__proto__ = employee;
employee1.calCTax(50000);

