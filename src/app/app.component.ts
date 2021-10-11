import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project2';

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://api.finicity.com/aggregation/v2/partners/authentication', {
      partnerId: "2445583846218",
      partnerSecret: "wkGqTrEbgf8w741VAUjH"
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Finicity-App-Key': 'bbd24b3754cbff169596e86c764bc337',
      }
    }).toPromise().then(data => {
      console.log(data);
    })
  }
}
