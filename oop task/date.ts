class Date1 {
    private day: number;
    private month: number;
    private year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public getDay(): number {
        return this.day;
    }

    public getMonth(): number {
        return this.month;
    }

    public getYear(): number {
        return this.year;
    }

    public setDay(day: number): void {
        this.day = day;
    }

    public setMonth(month: number): void {
        this.month = month;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public setDate(day: number, month: number, year: number): void {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public toString(): string {
        return `${this.day} /${this.month} /${this.year}`;
    }
}

