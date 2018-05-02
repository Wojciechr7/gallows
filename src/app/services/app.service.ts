import { Injectable } from '@angular/core';
import {Key} from '../classes/key';
import {Keys} from '../classes/keys';
import {Word} from '../classes/word';


@Injectable()
export class AppService {

  public keys: Array<Key>;
  public words: Array<Word>;


  constructor() {
    this.keys = Keys.createKeys();
    this.words = [new Word('welcome to gallows')];

  }

  public addNewWord(n: string): void {
    this.words.push(new Word(n));
  }

  public resetWords(): void {
      this.words = [];
  }



}
