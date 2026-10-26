import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  sections = [
    {
      title: 'Top Products',
      links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
    },
    {
      title: 'Quick Links',
      links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
    },
    {
      title: 'Features',
      links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
    },
    {
      title: 'Resources',
      links: ['Guides', 'Research', 'Experts', 'Agencies'],
    },
  ];
}
