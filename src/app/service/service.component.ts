import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services = [
    {
      icon: '<i class="fas fa-chart-pie"></i>',
      title: 'Business Consulting',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: '<i class="fas fa-chart-bar"></i>',
      title: 'Market Analysis',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: '<i class="fas fa-user-clock"></i>',
      title: 'User Monitoring',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: '<i class="fas fa-check-square"></i>',
      title: 'Seller Consulting',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: '<i class="fas fa-briefcase"></i>',
      title: 'Financial Investment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: '<i class="fas fa-check"></i>',
      title: 'Financial Management',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];
}
