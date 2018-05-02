import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  constructor(public as: AppService) { }

  ngOnInit() {
  }

}
