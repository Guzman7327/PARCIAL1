import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoComponent } from './curso.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursoService } from '../../services/curso.service';
import { CouchdbService } from '../services/couchdb.service';
describe('CursoComponent', () => {
  let component: CursoComponent;
  let fixture: ComponentFixture<CursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CursoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener una lista de cursos vacía al inicio', () => {
    expect(component.cursos.length).toBe(0);
  });
});
