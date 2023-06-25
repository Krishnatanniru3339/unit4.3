import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  response: any = [];
  id: any;
  data: any;
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }

  update(body: any) {
    this.apiService.update(body).subscribe((response: any) => {
      this.response = response?.response;
      console.log('update player', this.response);
    });
  }
  Update(
    job_id: any,
    jobName: string,
    description: string,
    location: string,
    salary: string
  ) {
    const body = {
      job_id: job_id,
      title: jobName,
      description: description,
      location: location,
      salary: salary.toString(),
    };
    this.update(body);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/home']);
  }
}
