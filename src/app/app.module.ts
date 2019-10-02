import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/dashboard/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { UiThemeComponent } from './components/dashboard/ui-theme/ui-theme.component';

import { ImStarService } from './services/im-star.service';
import { AuthService } from './services/auth.service';
// fireBase
 import { environment } from '../environments/environment';
 import { AngularFireModule } from '@angular/fire';
 import { AngularFirestoreModule } from '@angular/fire/firestore'
 import { AngularFireDatabaseModule } from '@angular/fire/database';
 import { AngularFireAuth } from '@angular/fire/auth';
//+++++firebase********/
 import { AuthGuard } from './guards/auth.guard'
 import { ProyectComponent } from './components/facebook/proyect/proyect.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    HeaderComponent,
    UiThemeComponent,
    ProyectComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConected),
    AngularFireDatabaseModule,
    AngularMaterialModule,
  ],
  providers: [ImStarService,AuthService,AngularFireAuth,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
