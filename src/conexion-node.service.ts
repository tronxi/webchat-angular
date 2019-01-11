import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionNodeService {
  //private url = 'http://raspberrytronxi.ddns.net:8000/webchat_server_node';
  private url = 'http://192.168.0.5:8000/webchat_server_node';
  constructor(private http: HttpClient) { }

  login(usuario: string, pass: string) {
    return this.http.post(this.url + '/login', {usuario: usuario, pass: pass});
  }

  registro(usuario: string, pass: string) {
    return this.http.post(this.url + '/registro', {usuario: usuario, pass: pass});
  }

  conversacionUsuario(usuario: string) {
    return this.http.post(this.url + '/conversacionUsuario', {usuario: usuario});
  }

  personas(usuario: string) {
    return this.http.post(this.url + '/personas', {usuario: usuario});
  }

  crearConversacion(usuario: string, persona: string) {
    return this.http.post(this.url + '/crearConversacion', {usuario: usuario, persona: persona});
  }

  mostrarMensajes(usuario: string, id: string) {
    return this.http.post(this.url + '/mostrarMensajes', {usuario: usuario, id: id});
  }

 enviarMensaje(usuario: string, id: string, mensaje: string) {
    return this.http.post(this.url + '/enviarMensaje', {usuario: usuario, id: id, mensaje: mensaje});
  }
}
