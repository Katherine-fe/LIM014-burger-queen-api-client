import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarKComponent } from './nav-bar-k.component';

describe('NavBarKComponent', () => {
  let component: NavBarKComponent;
  let fixture: ComponentFixture<NavBarKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
