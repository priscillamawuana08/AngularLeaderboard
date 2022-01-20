import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 

import { SidebarComponent } from './sidebar/sidebar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HonorComponent } from './honor/honor.component';
import { OverallRankComponent } from './overall-rank/overall-rank.component';
import { LanguagesComponent } from './languages/languages.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
   
    SidebarComponent,
    AddUserComponent,
    HonorComponent,
    OverallRankComponent,
    LanguagesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule , 
    MatCardModule,
    MatSidenavModule, 
    MatMenuModule,
    MatDividerModule, 
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
  MatTabsModule,
  FormsModule,
   ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
