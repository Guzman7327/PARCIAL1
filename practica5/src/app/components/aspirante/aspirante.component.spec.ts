import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AspiranteComponent } from './aspirante.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AspiranteService } from '../../services/aspirante.service';

describe('AspiranteComponent', () => {
  let component: AspiranteComponent;
  let fixture: ComponentFixture<AspiranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspiranteComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ AspiranteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deberia crear el componente", () => {
    expect(component).toBeTruthy();
  });

  it("deberia tener una lista de aspirantes vacia al inicio", () => {
    expect(component.aspirantes.length).toBe(0);
  });
});
