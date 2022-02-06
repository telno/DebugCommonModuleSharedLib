import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFancyLibComponent } from './my-fancy-lib.component';

describe('MyFancyLibComponent', () => {
  let component: MyFancyLibComponent;
  let fixture: ComponentFixture<MyFancyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFancyLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFancyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
