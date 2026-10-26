import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LeadersComponent } from '../leaders/leaders.component';
import { ServiceComponent } from '../service/service.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AboutUsComponent, LeadersComponent, ServiceComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  backgroundImage: string = './assets/images/pexels-cottonbro-3584996.jpg';
  overlayColor: string = 'rgba(0, 0, 0, 0.6)';

  getOverlayStyle() {
    return {
      'background-color': this.overlayColor,
    };
  }

  // name:string='eman' ;
  // age:number=25 ;
  // weclcome():void{
  //   alert(this.name)
  // }
  // ;
  // sayHello():void{
  //   alert(`hello ${this.name}`)
  // }
  // typing():void{
  //   console.log('hello')
  // };

  // url:string='assets/images/pexels-cottonbro-3584996.jpg' ;
  // path:string='https://www.google.com' ;

  // check:boolean=false ;
  // searcItem:string=''
}

