import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../../model/product-interface';
import { defer } from 'rxjs';

fdescribe('ProductService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: ProductService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductService(httpClientSpy as any);    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes: Product [] = [{
      _id: "D01",
      name: "Café americano",
      price: 5.0,
      image: "src/logo.png",
      type: "desayuno",
      dateEntry: new Date() 
      },
       {     
      _id: "D01",
       name: "Café americano",
       price: 5.0,
       image: "src/logo.png",
       type: "desayuno",
       dateEntry: new Date() 
       }];
       function asyncData<Product>(data: Product) {
        return defer(() => Promise.resolve(data));
      }
    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    service.getListProducts().subscribe(
      heroes => {
        expect(heroes).toEqual(expectedHeroes, 'expected heroes');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
