export class Key {

    private letter: string;
    private charCode: number;

    constructor(c: number) {
        this.charCode = c;
        this.letter = String.fromCharCode(this.charCode);
    }

    get getLetter(): string {
        return this.letter;
    }
}
