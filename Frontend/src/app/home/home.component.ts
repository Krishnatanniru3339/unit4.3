import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: any = [];

  constructor(private dataService: ApiService, private routes: Router) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dataService.getAllData().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  Search(body: any) {
    this.dataService.findOne(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  delete(data: string) {
    const body = {
      job_id: data,
    };

    this.dataService.delete(body).subscribe((response: any) => {
      this.data = response?.response;
    });
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/home']);
  }
}
