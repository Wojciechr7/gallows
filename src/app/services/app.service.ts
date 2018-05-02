import {Injectable} from '@angular/core';
import {Key} from '../classes/key';
import {Keys} from '../classes/keys';
import {Word} from '../classes/word';
import {Letter} from '../classes/letter';


@Injectable()
export class AppService {

    public keys: Array<Key>;
    public words: Array<Word>;
    private currentPassword: number;
    public letters: Array<Letter>;


    constructor() {
        this.keys = Keys.createKeys();
        this.words = [new Word('WELCOME TO GALLOWS')];
        this.currentPassword = 0;
        this.setWord();

    }

    public addNewWord(n: string): void {
        this.words.push(new Word(n));
    }

    public resetWords(): void {
        this.words = [];
    }

    public setWord(): void {
        if (this.words.length) {
            const wordArray = this.words[this.currentPassword].getName.split('');
            let letters: Array<Letter>;
            letters = [];

            for (const item of wordArray) {
                letters.push(new Letter(item));
            }
            this.letters = letters;
        }
    }

    public searchForEquals(clickedLetter: string): void {
        for (const item of this.letters) {
            if (item.equal(clickedLetter)) {
                item.visible = true;
            }
        }
    }



}
