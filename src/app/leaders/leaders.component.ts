import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaders.component.html',
  styleUrl: './leaders.component.css'
})
export class LeadersComponent {
  leaders = [
    {
      image: 'assets/images/person_1.jpg',
      name: 'Sara Sharp',
      position: 'Co-Founder,President',
      description: 'Nisi at consequatur unde molestiae quidem provident voluptatem deleniti.',
    },
    {
      image: 'assets/images/person_4.jpg',
      name: 'Tom Sharp',
      position: 'Co-Founder, COO',
      description: 'Nisi at consequatur unde molestiae quidem provident voluptatem deleniti.',
    },
    {
      image: 'assets/images/person_3.jpg',
      name: 'Winston Hodson',
      position: 'Marketing',
      description: 'Nisi at consequatur unde molestiae quidem provident voluptatem deleniti.',
    },
    {
      image: 'assets/images/person_2.jpg',
      name: 'John Rooster',
      position: 'Marketing',
      description: 'Nisi at consequatur unde molestiae quidem provident voluptatem deleniti.',
    },
  ];
}
