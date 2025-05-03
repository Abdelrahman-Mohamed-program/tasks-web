class Time {
    private hour: number;
    private minute: number;
    private second: number;

    constructor(hour: number, minute: number, second: number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    public getHour(): number {
        return this.hour;
    }

    public getMinute(): number {
        return this.minute;
    }

    public getSecond(): number {
        return this.second;
    }

    public setHour(hour: number): void {
        this.hour = hour;
    }

    public setMinute(minute: number): void {
        this.minute = minute;
    }

    public setSecond(second: number): void {
        this.second = second;
    }

    public setTime(hour: number, minute: number, second: number): void {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }


    public nextSecond(): Time {
        this.second++;
        if (this.second >= 60) {
            this.second = 0;
            this.minute++;
            if (this.minute >= 60) {
                this.minute = 0;
                this.hour++;
                if (this.hour >= 24) {
                    this.hour = 0;
                }
            }
        }
        return this;
    }

    public previousSecond(): Time {
        this.second--;
        if (this.second < 0) {
            this.second = 59;
            this.minute--;
            if (this.minute < 0) {
                this.minute = 59;
                this.hour--;
                if (this.hour < 0) {
                    this.hour = 23;
                }
            }
        }
        return this;
    }

    public toString(): string {
        const pad = (num: number): string => num.toString().padStart(2, '0');
        return `${pad(this.hour)}:${pad(this.minute)}:${pad(this.second)}`;
    }
}

