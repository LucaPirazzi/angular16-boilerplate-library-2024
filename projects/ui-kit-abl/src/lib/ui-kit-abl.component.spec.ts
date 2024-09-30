import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitAblComponents } from './ui-kit-abl.component';


describe('UiKitAblComponents', () => {
  let component: UiKitAblComponents;
  let fixture: ComponentFixture<UiKitAblComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiKitAblComponents]
    });
    fixture = TestBed.createComponent(UiKitAblComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
