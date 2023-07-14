import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {MenuModule} from 'primeng/menu';
import {SplitterModule} from 'primeng/splitter';
import {EditorModule} from 'primeng/editor';
import {TreeModule} from 'primeng/tree';
import {DropdownModule} from 'primeng/dropdown';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DividerModule} from 'primeng/divider';
import {SlideMenuModule} from 'primeng/slidemenu';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CardModule} from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { environment } from 'src/environments/environment';
import {BadgeModule} from 'primeng/badge';
import {SkeletonModule} from 'primeng/skeleton';
import { ListeningLevelComponent } from './ListeningLevel/listening.level.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeningLevelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    MenuModule,
    SplitterModule,
    EditorModule,
    MonacoEditorModule,
    TreeModule,
    DropdownModule,
    ContextMenuModule,
    DividerModule,
    SlideMenuModule,
    OverlayPanelModule,
    CardModule,
    BadgeModule,
    SkeletonModule,
    FieldsetModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
