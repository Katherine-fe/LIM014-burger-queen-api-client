import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../../model/product-interface';
import { ProductService } from 'src/app/services/products/product.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() visibleProducts: boolean = false;
  @Input() visibleProductsDelete: boolean = false;
  products: Product[] = [];
  

  @Input() title: string = '';
  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor(private prod: ProductService) { }

  ngOnInit(): void {
  }
  cerrarModalProduct(){
    this.close.emit(false);
  }

deleteProducts(product: any) {
  this.prod.deleteProduct(product).subscribe(data => {
    this.products = this.products.filter(prod => prod._id != product.id);
    console.log(data);
    alert("delete product");
    this.cerrarModalProduct();
  })
}
}
