import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { Report } from '../../../services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReports().subscribe((data: Report[]) => {
      this.reports = data;
      console.log(this.reports); // Check if all 4 reports are being loaded
    });
  }
}
