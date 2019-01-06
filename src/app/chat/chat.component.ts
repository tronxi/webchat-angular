import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DatosUsuarioService} from '../../datos-usuario.service';
import {ConexionNodeService} from '../../conexion-node.service';
import {Router} from '@angular/router';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('conversacionArea') area: ElementRef;
  usuario: string;
  persona: string;
  mensaje: string;
  texto: string;
  conversacion = null;
  actualizar = null;
  bajar = null;

  constructor(private user: DatosUsuarioService, private conex: ConexionNodeService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.user.usuario;
    this.persona = this.user.persona;
    this.conex.crearConversacion(this.usuario, this.persona).subscribe((resultado: string) => {
      this.user.id = resultado;
      this.bajar = setInterval(() => {
        this.bajarF();
      }, 500);
      this.actualizar = setInterval(() => {
        this.conex.mostrarMensajes(this.usuario, this.user.id).subscribe((resultado2) => {
          this.conversacion = resultado2;
          this.codificarTexto();
        });
      }, 500);
    });
  }
  codificarTexto() {
    this.texto = '';
    for(let i = 0; i < this.conversacion.length; i++) {
      this.texto += this.conversacion[i].nombre + ' ' + this.conversacion[i].fecha +
        ' ' + this.conversacion[i].texto2 + '\n';
    }
  }
  bajarF() {
    this.area.nativeElement.scrollTop = this.area.nativeElement.scrollHeight;
  }
  ngOnDestroy() {
    if (this.actualizar) {
      clearInterval(this.actualizar);
    }
    if (this.bajar) {
      clearInterval(this.bajar);
    }
  }
  enviar() {
    this.conex.enviarMensaje(this.usuario, this.user.id, this.mensaje).subscribe((resultado) =>{
      this.mensaje = '';
    });
  }
  atras() {
    this.router.navigateByUrl('/conversacionesUsuario');
  }
  cerrarSesion() {
    this.user.usuario = null;
    this.router.navigateByUrl('/login');
  }
}
