import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatosUsuarioService} from '../../datos-usuario.service';
import {ConexionNodeService} from '../../conexion-node.service';
import {Router} from '@angular/router';
import {SocketService} from '../../socket.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit, OnDestroy {
  usuario: string;
  conversaciones = null;
  tam: number;
  ioConnection: any;

  constructor(private user: DatosUsuarioService, private conex: ConexionNodeService,
              private router: Router, private socket: SocketService) { }

  ngOnInit() {
    this.usuario = this.user.usuario;
    this.buscar();
    this.initConnection();
  }
  ngOnDestroy() {

  }

  private initConnection(): void {
    this.socket.initSocket();

    this.ioConnection = this.socket.onNuevoUsario()
      .subscribe((message) => {
        this.buscar();
      });
  }
  buscar() {
    this.conex.personas(this.usuario).subscribe((resultado) => {
      this.conversaciones = resultado;
    });
    //this.tamPantalla();
  }
  tamPantalla() {
    if (screen.width <= 350) {
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

  atras() {
    this.router.navigateByUrl('/conversacionesUsuario');
  }
  cerrarSesion() {
    this.user.usuario = null;
    this.router.navigateByUrl('/login');
  }

}
