abstract class Employee {
    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        if (salary <= 0) {
            console.log("Salary must be > 0");
            return;
        }
        this.salary = salary;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    setName(name: string) {
        this.name = name;
    }

    setSalary(salary: number) {
        if (salary <= 0) {
            console.log("Salary must be > 0");
            return;
        }
        this.salary = salary;
    }

    abstract calculateSalary(): number;
}

class Developer extends Employee {
    private overtimeHours: number;

    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        super(id, name, salary);
        this.overtimeHours = overtimeHours;
    }

    calculateSalary(): number {
        return this.getSalary() + (this.overtimeHours * 50000);
    }
}

class Manager extends Employee {
    private teamSize: number;

    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }

    calculateSalary(): number {
        return this.getSalary() + (this.teamSize * 200000);
    }
}


const dev = new Developer(1, "Duong", 100000, 20);
console.log("Dev:", dev.calculateSalary());

const manager = new Manager(2, "Duy", 100000, 10);
console.log("Manager:", manager.calculateSalary());

