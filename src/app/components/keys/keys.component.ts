import { Component, OnInit, HostListener } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  constructor(public as: AppService) { }

    @HostListener('document:keypress', ['$event'])
    keypress(event: KeyboardEvent) {
        for (const item of this.as.keys) {
          if (event.key === ' ') {
            break;
          }
          if (item.getLetter === event.key.toUpperCase()) {
            this.as.searchForEquals(item);
          }
        }
    }



  ngOnInit() {
  }

}
