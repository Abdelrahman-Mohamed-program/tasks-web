class Employee {
    private id: number;
    private firstName: string;
    private lastName: string;
    private salary: number;

    constructor(id: number, firstName: string, lastName: string, salary: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    public getId(): number {
        return this.id;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

    public getAnnualSalary(): number {
        return this.salary * 12;
    }

    public raiseSalary(percent: number): number {
        const increase = this.salary * (percent / 100);
        this.salary += increase;
        return this.salary;
    }

    public toString(): string {
        return `Employee[id=${this.id}, name=${this.getName()}, salary=${this.salary}]`;
    }
}

