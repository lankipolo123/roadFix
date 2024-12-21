import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// Define the Report interface
export interface Report {
  title: string;
  location: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root', // Makes it available throughout the app
})
export class ReportService {
  constructor() {}

  // Method to get the reports (we'll use `of()` to return an observable with dummy data)
  getReports() {
    const reports: Report[] = [
      {
        title: 'Pothole',
        location: 'Street 123',
        imageUrl: 'assets/pothole.jpg',
      },
      {
        title: 'Broken Sidewalk',
        location: 'Road 456',
        imageUrl: 'assets/broken_sidewalk.jpg',
      },
      {
        title: 'Flooded Road',
        location: 'Avenue 789',
        imageUrl: 'assets/floodedroad.png',
      },
      {
        title: 'Damaged Bridge',
        location: 'Lane 101',
        imageUrl: 'assets/dmgbridge.png',
      },
    ];

    console.log('Reports from service:', reports); // Log the reports to verify the data

    return of(reports); // Return reports wrapped in an observable
  }
}
