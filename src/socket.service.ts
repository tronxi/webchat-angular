import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  constructor() { }

  public initSocket(): void {
    this.socket = io('http://raspberrytronxi.ddns.net', {path: '/webchat_server_node_socket'});
    //this.socket = io('http://192.168.0.5', {path: '/webchat_server_node_socket'});
  }

  public unirse(sala): void {
    this.socket.emit('union', {id: sala});
  }

  public salir(sala): void {
    this.socket.emit('salir', {id: sala});
  }

  public onActualizarMensajes(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('actualizar-mensajes', (data) => observer.next(data));
    });
  }

  public onNuevoUsario(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('nuevo-usuario', (data) => observer.next(data));
    });
  }

  public onActulizarMarcadoresMensajes(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('nuevo-mensaje', (data) => observer.next(data));
    });
  }

  public onEvent(event): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
