class Account {
    private id: string;
    private name: string;
    private balance: number = 0;

    constructor(id: string, name: string);
    constructor(id: string, name: string, balance: number);
    constructor(id: string, name: string, balance?: number) {
        this.id = id;
        this.name = name;
        if (balance !== undefined) {
            this.balance = balance;
        }
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getBalance(): number {
        return this.balance;
    }

    public credit(amount: number): number {
        this.balance += amount;
        return this.balance;
    }

    public debit(amount: number): number {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    }

    public transferTo(anotherAccount: Account, amount: number): number {
        if (amount <= this.balance) {
            this.balance -= amount;
            anotherAccount.credit(amount);
        } else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    }

    public toString(): string {
        return `Account[id=${this.id},name=${this.name},balance=${this.balance}]`;
    }
}

