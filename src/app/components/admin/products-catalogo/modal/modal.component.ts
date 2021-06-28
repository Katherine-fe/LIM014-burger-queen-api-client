import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../model/product-interface';
import { ProductService } from 'src/app/services/products/product.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth/auth.service';
import * as dayjs from 'dayjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() visibleProducts: boolean = false;
  @Input() visibleProductsDelete: boolean = false;
  @Input() visibleProductsAdd: boolean = false;
  products: Product[] = [];
  productId!: string;
  productImg!: string;

  @Input() title: string = '';
  @Input() buttonAddUpdate: string = '';
  private token: any = this.auth.getToken();
  private tokenEncode: any = jwt_decode(this.token);
  @Input() objProd2: any;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(private auth: AuthService, private prod: ProductService) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', []),
    type: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void { }
  cerrarModalProduct() {
    this.close.emit(false);
  }

  deleteProducts(product: any) {
    if (this.tokenEncode.roles.admin) {
      this.prod.deleteProduct(product).subscribe(() => {
        this.products = this.products.filter((prod) => prod._id != product.id);
        console.log('eliminado');
        this.cerrarModalProduct();
      });
    } else {
      console.log('no es admin');
    }
  }
  addProduct() {
    if (this.tokenEncode.roles.admin) {
      if (this.form.valid) {
        const newProd: object = {
          name: this.form.value.name,
          price: this.form.value.price,
          image: 'assets/img/burger1.png',
          type: this.form.value.type,
          dateEntry: dayjs().format('YYYY-MM-DD')
        }
        this.prod.postProduct(newProd).subscribe(() => {
          this.form.reset();
          this.cerrarModalProduct();
          console.log(newProd); console.log('registrado');
        });
      } else {
        alert('Verifique los campos')
      }
    } else {
      console.log('no es admin');
    }
  }
  editProduct() {
    if (this.tokenEncode.roles.admin) {
      if (this.objProd2._id !== null) {
        if (this.form.valid) {
          const newProd = {
            name: this.form.value.name,
            price: this.form.value.price,
            image: 'assets/img/burger1.png',
            type: this.form.value.type,
          };
          this.prod.updateProduct(newProd, this.objProd2._id).subscribe(() => {
            this.form.reset();
            this.cerrarModalProduct();
            console.log(newProd); console.log('editado');
          });
        } else {
          alert('Verifique los campos')
        }
      }
    } else {
      console.log('no es admin');
    }
  }
}
