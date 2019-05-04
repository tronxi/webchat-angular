import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DatosUsuarioService} from '../../datos-usuario.service';
import {ConexionNodeService} from '../../conexion-node.service';
import {SocketService} from '../../socket.service';
import {Router} from '@angular/router';

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
  conversacion = null;
  bajar = null;
  ioConnection: any;

  constructor(private user: DatosUsuarioService, private conex: ConexionNodeService,
              private router: Router, private socket: SocketService) { }

  ngOnInit() {
    this.usuario = this.user.usuario;
    this.persona = this.user.persona;
    this.mensaje = '';
    this.conex.crearConversacion(this.usuario, this.persona).subscribe((resultado: string) => {
      this.user.id = resultado;
      this.bajar = setTimeout(() => {
        this.bajarF();
      }, 500);
      this.conex.mostrarMensajes(this.usuario, this.user.id).subscribe((resultado2) => {
        this.conversacion = resultado2;
      });
      this.initConnection();
    });
  }

  private initConnection(): void {
    this.socket.initSocket();

    this.ioConnection = this.socket.onActualizarMensajes()
      .subscribe((message) => {
        this.conex.mostrarMensajes(this.usuario, this.user.id).subscribe((resultado2) => {
          this.conversacion = resultado2;
          this.bajar = setTimeout(() => {
            this.bajarF();
          }, 500);
        });
      });

    this.socket.onEvent('connect')
      .subscribe(() => {
        this.socket.unirse(this.user.id);
      });

    this.socket.onEvent('disconnect')
      .subscribe(() => {
      });
  }

  bajarF() {
    this.area.nativeElement.scrollTop = this.area.nativeElement.scrollHeight;
  }
  ngOnDestroy() {
    this.socket.salir(this.user.id);
  }
  enviar() {
    if (this.mensaje != '') {
      this.conex.enviarMensaje(this.usuario, this.user.id, this.mensaje).subscribe((resultado) => {

      });
    }
    this.mensaje = '';
    this.bajar = setTimeout(() => {
      this.bajarF();
    }, 500);
  }
  atras() {
    this.router.navigateByUrl('/conversacionesUsuario');
  }
  cerrarSesion() {
    this.user.usuario = null;
    this.router.navigateByUrl('/login');
  }
}
