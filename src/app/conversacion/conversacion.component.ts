import {Component, Input, OnInit} from '@angular/core';
import {DatosUsuarioService} from '../../datos-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.css']
})
export class ConversacionComponent implements OnInit {
  @Input() nombre: string;
  @Input() estado: string;
  mostrarEstado: boolean;
  constructor(private user: DatosUsuarioService, private router: Router) { }

  ngOnInit() {
    if (this.estado == '0') {
      this.mostrarEstado = false;
    } else {
      this.mostrarEstado = true;
    }
  }

  hablar() {
    this.user.persona = this.nombre;
    this.router.navigateByUrl('/chat');
  }

}
