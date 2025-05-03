class InvoiceItem {
    private id: string;
    private desc: string;
    private qty: number;
    private unitPrice: number;

    constructor(id: string, desc: string, qty: number, unitPrice: number) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }

    public getId(): string {
        return this.id;
    }

    public getDesc(): string {
        return this.desc;
    }

    public getQty(): number {
        return this.qty;
    }

    public setQty(qty: number): void {
        this.qty = qty;
    }

    public getUnitPrice(): number {
        return this.unitPrice;
    }

    public setUnitPrice(unitPrice: number): void {
        this.unitPrice = unitPrice;
    }

    public getTotal(): number {
        return this.qty * this.unitPrice;
    }

    public toString(): string {
        return `InvoiceItem[id=${this.id}, desc=${this.desc}, qty=${this.qty}, unitPrice=${this.unitPrice}]`;
    }
}

