import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
  productDeatails: any = {}
  constructor(private _DataService: DataService, private _ActiveRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this._ActiveRoute.params.subscribe((res) => {
      console.log(res)
      this._DataService.getSingleData(res['id']).subscribe((res) => {
        console.log(res)
        this.productDeatails = res
      })
    })
  }

}
