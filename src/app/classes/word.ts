export class Word {

    private name: string;

    constructor(n: string) {
        this.name = n;
    }


    get getName() {
        return this.name;
    }

}
