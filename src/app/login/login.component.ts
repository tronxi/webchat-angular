import { Component, OnInit } from '@angular/core';
import {ConexionNodeService} from '../../conexion-node.service';
import { Router } from '@angular/router';
import {DatosUsuarioService} from '../../datos-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  pass: string;
  constructor(private conex: ConexionNodeService, private router: Router, private user: DatosUsuarioService) { }

  ngOnInit() {
  }

  login() {
    if (this.usuario != null && this.pass != null) {
      this.conex.login(this.usuario, this.pass).subscribe((resultado) => {
        if (resultado == 'ok') {
          this.router.navigateByUrl('/conversacionesUsuario');
          this.user.usuario = this.usuario;
        } else if (resultado == 'noExiste') {
            alert('No existe el usuario');
        } else {
          alert('Contraseña incorrecta');
        }
      });
    }
  }

  registro() {
    this.router.navigateByUrl('/registro');
  }

}
