import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as $ from 'jquery';


@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

    private url: string;

    constructor(public as: AppService, private http: HttpClient) {
        this.url = 'http://localhost:3000/word';
    }


    public addRandom() {
        $('.loading-container').show();
        this.getWord().subscribe(words => {
            this.as.addNewWord(words.word);
            $('.loading-container').hide();
        });

    }

    public getWord(): Observable<any> {
        return this.http.get<any>(this.url);
    }




    ngOnInit() {

    }

}
