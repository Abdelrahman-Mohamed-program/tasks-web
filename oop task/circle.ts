class Circle {
    
    private radius: number = 1.0;

    constructor(radius: number){
        this.radius=radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    
    public setRadius(radius: number): void {
        this.radius = radius;
    }

    
    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    
    public getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }

    
    public toString(): string {
        return `Circle[radius=${this.radius}]`;
    }
}
