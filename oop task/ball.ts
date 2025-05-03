class Ball {
    private x: number;
    private y: number;
    private radius: number;
    private xDelta: number;
    private yDelta: number;

    constructor(x: number, y: number, radius: number, xDelta: number, yDelta: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
    }

    
    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getRadius(): number {
        return this.radius;
    }

    public getXDelta(): number {
        return this.xDelta;
    }

    public getYDelta(): number {
        return this.yDelta;
    }


    public setX(x: number): void {
        this.x = x;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public setXDelta(xDelta: number): void {
        this.xDelta = xDelta;
    }

    public setYDelta(yDelta: number): void {
        this.yDelta = yDelta;
    }

    public move(): void {
        this.x += this.xDelta;
        this.y += this.yDelta;
    }

    public reflectHorizontal(): void {
        this.xDelta = -this.xDelta;
    }

    public reflectVertical(): void {
        this.yDelta = -this.yDelta;
    }

    public toString(): string {
        return `Ball[(${this.x},${this.y}),speed=(${this.xDelta},${this.yDelta})]`;
    }
}

