interface Employee {
    id: number
    name: string
    salary: number
    getSalary(): number
}

class FullTimeEmployee implements Employee {
    id: number
    name: string
    salary: number
    getSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee implements Employee {
    id: number
    name: string
    salary: number
    hoursWorked: number
    getSalary(): number {
        return this.salary * this.hoursWorked;
    }
}

function calculateTotalSalary(employees: Employee[]): number {
    let totalSalary = 0;
    for (let emp of employees) {
        totalSalary += emp.getSalary();
    }
    return totalSalary;
}

const fullTimeEmployee = new FullTimeEmployee();
fullTimeEmployee.id = 1;
fullTimeEmployee.name = "Duong";
fullTimeEmployee.salary = 50;
const partTimeEmployee = new PartTimeEmployee();
partTimeEmployee.id = 2;
partTimeEmployee.name = "Duy";
partTimeEmployee.salary = 14;
partTimeEmployee.hoursWorked = 2;

console.log(calculateTotalSalary([fullTimeEmployee]));
console.log(calculateTotalSalary([partTimeEmployee]));
console.log(calculateTotalSalary([fullTimeEmployee, partTimeEmployee]));



