import { inject } from '@angular/core/testing/test_bed';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FindPetsService } from './find-pets.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';
import { FindPetsComponent } from './find-pets.component';
import { BaseRequestOptions, Http, Jsonp, JsonpModule, RequestMethod, ResponseOptions, Response, XHRBackend } from '@angular/http';

describe('FindPetsComponent', () => {
  let component: FindPetsComponent;
  let fixture: ComponentFixture<FindPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindPetsComponent],
      imports: [JsonpModule],
      providers: [FindPetsService, MockBackend, BaseRequestOptions,
        {
          provide: Jsonp, deps: [MockBackend, BaseRequestOptions], useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Jsonp(backend, defaultOptions);
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPetsComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });
  it('should create the app find pets component', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('the list of pets owned by male owners to be empty initially', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.maleOwnerPets.length).toBe(0);
  });

  it('the list of pets owned by female owners to be empty initially', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.femaleOwnerPets.length).toBe(0);
  });



  it('the pricing for nike customer to be called', async(() => {
    let app = fixture.debugElement.componentInstance;
    let findPetsService = fixture.debugElement.injector.get(FindPetsService);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    const mockResponse =
      [
        {
          "name": "Bob",
          "gender": "Male",
          "age": 23,
          "pets": [
            {
              "name": "Garfield",
              "type": "Cat"
            },
            {
              "name": "Fido",
              "type": "Dog"
            }
          ]
        },
        {
          "name": "Jennifer",
          "gender": "Female",
          "age": 18,
          "pets": [
            {
              "name": "Garfield",
              "type": "Cat"
            }
          ]
        },
        {
          "name": "Steve",
          "gender": "Male",
          "age": 45,
          "pets": null
        }
      ];
    let spy = spyOn(findPetsService, 'findPets').and.returnValue({ subscribe: () => {mockResponse} });;
    app.findPets();
    expect(spy).toHaveBeenCalled();
  }));

  it('the mock the response and check if the fields are availble', async(() => {
    const app = fixture.debugElement.componentInstance;
    let findPetsService = fixture.debugElement.injector.get(FindPetsService);
    let mockBackend = fixture.debugElement.injector.get(MockBackend);
    const mockResponse =
      [
        {
          "name": "Bob",
          "gender": "Male",
          "age": 23,
          "pets": [
            {
              "name": "Garfield",
              "type": "Cat"
            },
            {
              "name": "Fido",
              "type": "Dog"
            }
          ]
        },
        {
          "name": "Jennifer",
          "gender": "Female",
          "age": 18,
          "pets": [
            {
              "name": "Garfield",
              "type": "Cat"
            }
          ]
        },
        {
          "name": "Steve",
          "gender": "Male",
          "age": 45,
          "pets": null
        }
      ];
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(mockResponse)
      });
      connection.mockRespond(new Response(options));
    });
    findPetsService.findPets().subscribe((result) => {
      expect(result[0].pets[0].name).toEqual("Garfield");
      expect(result[0].pets[0].type).toEqual("Cat");
      expect(result[1].pets[0].name).toEqual("Garfield");
      expect(result[1].pets[0].type).toEqual("Cat");
    });
  }));
});
