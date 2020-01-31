import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
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
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
