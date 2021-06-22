import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../../model/product-interface';
import { ProductService } from 'src/app/services/products/product.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() visibleProducts: boolean = false;
  @Input() visibleProductsDelete: boolean = false;
  products: Product[] = [];
  productId!: string; 
  productImg!: string; 
  

  @Input() title: string = '';
  @Input() buttonAddUpdate: string = '';
  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor(private prod: ProductService) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', []),
    type: new FormControl('', [Validators.required]),
    dateEntry: new FormControl('', [Validators.required]),
  });

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
probando(){
if ( this.buttonAddUpdate === 'Add'){
  if (this.form.valid) {
    const newProd: object = {
      "name": this.form.value.name,
      "price": this.form.value.price,
      "image": "assets/img/burger1.png",
      "type": this.form.value.type,
      "dateEntry": this.form.value.dateEntry,
    };
    console.log(newProd)
    this.prod.postProduct(newProd).subscribe(() => {
      this.form.reset();
      console.log('registrado');
    })
  } else{
    console.log('no registrado')
  }
}else {
  
  console.log('editar')
}  
}

}
