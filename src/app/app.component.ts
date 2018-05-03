import {Component, OnInit} from '@angular/core';
import {AppService} from './services/app.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Socket} from 'ng-socket-io';
import * as $ from 'jquery';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public title = 'Hangman game';

    constructor(public as: AppService) {

    }

    ngOnInit() {

        this.as
            .getOnline()
            .subscribe(msg => {
                this.title = `Hangman game (online: ${msg})`;
            });

        this.as
            .getWord()
            .subscribe(word => {
                this.as.addNewWord(word);
            });
    }
}
