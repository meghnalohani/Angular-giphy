import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // this.route.navigateByUrl('/', {skipLocationChange: true}).then(
    //   () => {
    //     this.route.navigate(['dashboard', 'stockdetail', stockname]);
    //   }
    // );
  }

}
