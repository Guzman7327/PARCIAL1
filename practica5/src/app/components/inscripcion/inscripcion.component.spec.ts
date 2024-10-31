import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscripcionComponent } from './inscripcion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InscripcionService } from '../../services/inscripcion.service';

describe('InscripcionComponent', () => {
  let component: InscripcionComponent;
  let fixture: ComponentFixture<InscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ InscripcionService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener una lista de inscripciones vacía al inicio', () => {
    expect(component.inscripciones.length).toBe(0);
  });
});
