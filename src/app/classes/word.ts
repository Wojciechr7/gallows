export class Word {

    private name: string;

    constructor(n: string) {
        this.name = n.toUpperCase();
    }


    get getName() {
        return this.name;
    }

}
