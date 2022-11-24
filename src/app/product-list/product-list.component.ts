import { Component, OnInit} from '@angular/core';
import { HttpService } from '../http.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {
  products : any [] = []
  categories : string[] = ["smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"]

  filterCategory : string = ''
  constructor(public productService : ProductsService, private client : HttpService){
    this.products = this.productService.products

  }

  ngOnInit() : void {

  }

  // Remove any category or search filters and restore original product list
  reset(){
    this.products = this.productService.products
    this.filterCategory = ''
    this.productService.triggered = false
  }

  // Changes Product List to contain only selected category products
  filter(category : string){
    this.filterCategory = category
     this.client.getFiltered(category).subscribe(f => {
      this.products = f['products']
    })
  }

  // Check for Search Trigger to update Product List according to Search Query
  ngDoCheck(){
    if(this.productService.triggered)
    {
      this.client.getSearch(this.productService.searchString).subscribe(f => {
        this.products = f['products']
        this.productService.triggered = false
      })

    }
    }
}
