import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(public as: AppService) { }




  ngOnInit() {

  }

}
