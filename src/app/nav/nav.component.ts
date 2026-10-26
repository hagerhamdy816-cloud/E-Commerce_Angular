import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  searchTerm:string=''
  constructor(private _Router:Router){}
  onSearch(){
    if(this.searchTerm.trim()!==''){
      this._Router.navigate(['/our-products'],{queryParams:{search:this.searchTerm}})
    }
  }

}
