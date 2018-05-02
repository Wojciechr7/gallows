


export class Letter {

    public visible: boolean;
    private sign: string;
    private original: string;

    constructor(o: string) {
        this.original = o.toUpperCase();
        this.visible = false;
       if (o === ' ') {
           this.sign = '\xa0\xa0\xa0\xa0';
           this.original = this.sign;
       } else {
           this.sign = '_';
       }
    }

    get getSign() {
        return this.sign;
    }
    get getOriginal() {
        return this.original;
    }

    public equal(l: string): boolean {
        return l === this.original;
    }


}
