import { Component } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard/dashboard.service';
import { Dashboard } from '../shared/model/dashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dashboard: Dashboard[] = [];
  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAll().subscribe((data: Dashboard[])=>{
      this.dashboard = data;
      console.log(this.dashboard);
    })  
  }
}
