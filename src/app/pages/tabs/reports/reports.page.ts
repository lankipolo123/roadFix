import { Component, OnInit } from '@angular/core';
import { ReportService, Report } from '../../../services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  reports: Report[] = [];  // Array to hold reports

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.loadReports();  // Load reports when the page initializes
  }

  loadReports() {
    this.reportService.getReports().subscribe((data: Report[]) => {
      this.reports = data;  // Store the reports in the reports array
      console.log(this.reports);  // Check if the data is being loaded
    });
  }
}
