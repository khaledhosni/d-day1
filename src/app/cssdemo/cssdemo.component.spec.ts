import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssdemoComponent } from './cssdemo.component';

describe('CssdemoComponent', () => {
  let component: CssdemoComponent;
  let fixture: ComponentFixture<CssdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
