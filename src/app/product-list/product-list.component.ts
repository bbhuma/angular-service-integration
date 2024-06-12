import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../product.service';  // Adjust the path as necessary
import { Product } from '../product.model';  // Adjust the path as necessary

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response:any) => {
      this.products = response.products;  // Ensure response contains products property
      this.loading = false;
      console.log(this.products);
    }, (error:any) => {
      console.error('Error fetching products', error);
      this.loading = false;
    });
  }

  addToCart(product: Product): void {
    console.log('Adding product to cart:', product);
    // Add your logic to handle adding product to cart
  }
}
