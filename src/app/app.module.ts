import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ConexionNodeService} from '../conexion-node.service';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ConversacionesUsuarioComponent } from './conversaciones-usuario/conversaciones-usuario.component';
import { ConversacionComponent } from './conversacion/conversacion.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material';
import { PersonasComponent } from './personas/personas.component';
import { ChatComponent } from './chat/chat.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ConversacionesUsuarioComponent,
    ConversacionComponent,
    PersonasComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    ScrollingModule
  ],
  providers: [ConexionNodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
