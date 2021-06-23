import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../../model/product-interface';
import { ProductService } from 'src/app/services/products/product.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/services/auth/auth.service';

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
  private token: any =this.auth.getToken();
  private tokenEncode: any = jwt_decode(this.token);
  @Input() objProd2 : any; 
  @Input() title: string = '';
  @Input() buttonAddUpdate: string = '';
  @Output() close: EventEmitter<boolean> = new EventEmitter;

  constructor(private auth: AuthService, private prod: ProductService) { }

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
    if(this.tokenEncode.roles.admin){
      this.prod.deleteProduct(product).subscribe(() => {
        this.products = this.products.filter(prod => prod._id != product.id);
        console.log('eliminado');
        this.cerrarModalProduct();
      })
    } else {
      console.log('no es admin')
    }
    }
  probando(){
    if(this.tokenEncode.roles.admin){
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
                this.cerrarModalProduct();
                console.log('registrado');
              })
            } else{
              console.log('no registrado')
            }
          } else {
            console.log('editar')
             this.saveEdition();
            console.log(this.objProd2)
          }  
    } else {
      console.log('no es admin')

    }
 
}
saveEdition() {
  if (this.productId !== null) {
    const newProduct = {
      "name": this.form.value.name,
      "price": this.form.value.price,
      "image": "assets/img/burger1.png",
      "type": this.form.value.type,
      
    }
    if (this.form.valid) {
      this.prod.updateProduct(newProduct, this.productId).subscribe(() => {
        this.form.reset();
        console.log('editado')
      })
    }
  }
}

}