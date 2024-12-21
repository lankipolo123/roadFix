import { Component, OnInit } from '@angular/core';
import { ReportService, Report } from '../../../services/report.service';

@Component({
  selector: 'app-fixed',
  templateUrl: './fixed.page.html',
  styleUrls: ['./fixed.page.scss'],
})
export class FixedPage implements OnInit {
  randomReport: Report | null = null;

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.loadRandomReport();
  }

  loadRandomReport() {
    // Get all reports from the service
    this.reportService.getReports().subscribe((reports: Report[]) => {
      // Pick a random report from the list
      const randomIndex = Math.floor(Math.random() * reports.length);
      this.randomReport = reports[randomIndex]; // Set the random report
    });
  }
}
