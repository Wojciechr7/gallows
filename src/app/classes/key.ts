export class Key {

    private letter: string;
    private charCode: number;
    private enabled;

    constructor(c: number) {
        this.charCode = c;
        this.letter = String.fromCharCode(this.charCode);
        this.enabled = true;
    }

    get getLetter(): string {
        return this.letter;
    }

    get isEnabled(): boolean {
        return this.enabled;
    }

    public disable() {
        this.enabled = false;
    }
    public enable() {
        this.enabled = true;
    }
}
