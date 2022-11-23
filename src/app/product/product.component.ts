import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product : any
  inCart : boolean = false
  constructor(private productService : ProductsService){

  }

  ngOnInit() : void {
  }

  add(p : any){
    this.productService.addCart(p)
    this.inCart = true
  }

  remove(p : any){
    this.productService.removeCart(p)
    this.inCart = false
  }
}