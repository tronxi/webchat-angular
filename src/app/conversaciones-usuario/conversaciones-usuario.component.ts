import { Component, OnInit, OnDestroy } from '@angular/core';
import {DatosUsuarioService} from '../../datos-usuario.service';
import {ConexionNodeService} from '../../conexion-node.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversaciones-usuario',
  templateUrl: './conversaciones-usuario.component.html',
  styleUrls: ['./conversaciones-usuario.component.css']
})
export class ConversacionesUsuarioComponent implements OnInit,  OnDestroy{

  usuario: string;
  conversaciones = null;
  actualizar = null;
  tam: number;
  constructor(private user: DatosUsuarioService, private conex: ConexionNodeService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.user.usuario;
    this.actualizar = setInterval(() => {
      this.buscar();
    }, 500);
    this.buscar();
  }
    ngOnDestroy() {
      if (this.actualizar) {
        clearInterval(this.actualizar);
      }
    }
  buscar() {
    this.conex.conversacionUsuario(this.usuario).subscribe((resultado) => {
      this.conversaciones = resultado;
    });
    this.tamPantalla();
  }
  tamPantalla() {
    if (screen.width <= 350){
      this.tam = 1;
    } else if (screen.width > 350 && screen.width < 450) {
      this.tam = 2;
    } else if (screen.width >= 450 && screen.width <= 1024) {
      this.tam = 4;
    } else if (screen.width > 1024 && screen.width < 1500) {
      this.tam = 5;
    } else {
      this.tam = 6;
    }
  }
  buscarTodas() {
    this.router.navigateByUrl('/personas');
  }
  cerrarSesion() {
    this.user.usuario = null;
    this.router.navigateByUrl('/login');
  }

}
