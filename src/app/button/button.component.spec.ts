import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', ()=>{
    const comp = new ButtonComponent;
    
    expect(comp.isOn).toBe(false, 'off at first');
    
    comp.clicked();
    expect(comp.isOn). toBe(true, 'on at first');

    

  });

  it('#clicked() should set #message to is on', ()=>{
    const comp = new ButtonComponent();

    expect(comp.message).toMatch(/is Off/, 'off at first');

    comp.clicked();

    expect(comp.message).toMatch(/is on/i, 'on after click');
  });
});
