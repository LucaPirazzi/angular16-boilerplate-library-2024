import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloUiKitComponent } from './hello-ui-kit.component';

describe('HelloUiKitComponent', () => {
  let component: HelloUiKitComponent;
  let fixture: ComponentFixture<HelloUiKitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloUiKitComponent]
    });
    fixture = TestBed.createComponent(HelloUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
