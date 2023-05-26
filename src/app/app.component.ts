import { Component, OnInit } from '@angular/core';
import { staffMember } from './interfaceStaff';
import { MockapiService } from './services/mockapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MayExam';

  results!: staffMember[]

  constructor(private _mockapi: MockapiService) { }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(): boolean {
    this._mockapi.getStaffDetails().subscribe(
      staffData => {
        this.results = staffData;
        console.log(this.results);
      }
    )
    return false;
  }
}
