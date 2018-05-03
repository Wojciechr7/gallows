import {Injectable} from '@angular/core';
import {Key} from '../classes/key';
import {Keys} from '../classes/keys';
import {Word} from '../classes/word';
import {Letter} from '../classes/letter';
import 'rxjs/add/operator/map';
import { Socket } from 'ng-socket-io';


@Injectable()
export class AppService {

    public keys: Array<Key>;
    public words: Array<Word>;
    private currentPassword: number;
    public letters: Array<Letter>;
    public looses: number;
    public isGameEnabled: boolean;


    constructor(private socket: Socket) {
        this.keys = Keys.createKeys();
        this.words = [new Word('WELCOME TO GALLOWS')];
        this.currentPassword = 0;
        this.setWord();
        this.looses = 0;
        this.isGameEnabled = false;



    }

    public addNewWord(n) {
        let pushAllowed: boolean;
        if (n) {
            for (let i = 0; i < n.length; i++) {
                pushAllowed = false;
                for (const key of this.keys) {
                    if (key.getLetter === n[i].toUpperCase() || n[i].toUpperCase() === ' ') {
                        pushAllowed = true;
                        break;
                    }
                }
                if (!pushAllowed) {
                    break;
                }
            }

            if (pushAllowed) {
                this.words.push(new Word(n));
            }
        }
    }

    public resetWords(): void {
        this.words = [];
    }

    public setWord(): void {
        if (this.words.length) {
            this.isGameEnabled = true;
            const wordArray = this.words[this.currentPassword].getName.split('');
            let letters: Array<Letter>;
            letters = [];

            for (const item of wordArray) {
                letters.push(new Letter(item));
            }
            this.letters = letters;

            if (this.currentPassword < this.words.length - 1) {
                this.currentPassword++;
            } else {
                this.currentPassword = 0;
            }
            this.looses = 0;
            this.resetKeys();
        }
    }

    public searchForEquals(item: Key): void {
        if (this.isGameEnabled) {
            item.disable();
            const clickedLetter: string = item.getLetter;
            let foundEquals: boolean;
            foundEquals = false;
            for (const letter of this.letters) {
                if (letter.equal(clickedLetter)) {
                    letter.visible = true;
                    foundEquals = true;
                }
            }
            if (!foundEquals) {
                this.looses++;
            }
            if (this.looses === 9) {
                alert('GAME OVER!!!');
                this.isGameEnabled = false;
                this.showLetters();
            } else {
                this.winChecker();
            }
        }
    }

    private resetKeys(): void {
        for (const key of this.keys) {
            key.enable();
        }
    }

    private winChecker(): void {
        let wonGame: boolean;
        wonGame = true;
        for (const letter of this.letters) {
            if (!letter.visible && letter.getOriginal !== '\xa0\xa0\xa0\xa0') {
                wonGame = false;
                break;
            }
        }
        if (wonGame) {
            alert('Congratulations!!!');
            this.isGameEnabled = false;
        }
    }

    private showLetters() {
        for (const letter of this.letters) {
            letter.visible = true;
        }
    }


    public getOnline() {
        return this.socket
            .fromEvent<any>('online')
            .map( data => data.online );
    }

    public getWord() {
        return this.socket
            .fromEvent<any>('new word')
            .map(data => data.word);
    }

    public sendNewWord(): void {
        let n;
        n = prompt('Type your new word');

        this.socket
            .emit('new word', n);
    }


}
