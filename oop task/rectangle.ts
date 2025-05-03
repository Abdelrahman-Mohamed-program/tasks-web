
class Rectangle {
    private length: number;
    private width: number;

    constructor(length: number = 1.0, width: number = 1.0) {
        this.length = length;
        this.width = width;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getArea(): number {
        return this.length * this.width;
    }

    public getPerimeter(): number {
        return 2 * (this.length + this.width);
    }

    public toString(): string {
        return `Rectangle[length=${this.length},width=${this.width}]`;
    }
}

