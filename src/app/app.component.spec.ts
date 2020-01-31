import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule} from '@angular/cdk/table';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatFormFieldModule } from "@angular/material";

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatTableModule,
  HttpClientModule,
  CdkTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSortModule,
  ChartsModule,
  MatFormFieldModule,
  RouterTestingModule
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...modules],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it(`input should work`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const imputField = fixture.nativeElement.querySelector('input');
      imputField.value = 'Some new value';
      fixture.detectChanges();
      expect(imputField.value.trim()).toBe('Some new value');
  });

  it(`should match range`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const rangeElement = fixture.nativeElement.querySelector('.mat-paginator-range-label');
    fixture.detectChanges();
    expect(rangeElement.innerText.trim()).toBe('0 of 0');
  });


});

