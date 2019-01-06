import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistroComponent} from './registro/registro.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ConversacionesUsuarioComponent} from './conversaciones-usuario/conversaciones-usuario.component';
import {PersonasComponent} from './personas/personas.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'conversacionesUsuario',
    component: ConversacionesUsuarioComponent
  },
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
