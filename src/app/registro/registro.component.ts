import { Component, OnInit } from '@angular/core';
import {ConexionNodeService} from '../../conexion-node.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: string;
  pass: string;
  constructor(private conex: ConexionNodeService, private router: Router) { }

  ngOnInit() {
  }

  registro() {
    if (this.usuario != null && this.pass != null) {
      this.conex.registro(this.usuario, this.pass).subscribe((resultado) => {
        if (resultado == 'ok') {
          this.router.navigateByUrl('/login');
        } else if (resultado == 'existe') {
          alert('El usuario ya existe');
        }
      });
    }
  }

}
