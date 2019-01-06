import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
  usuario: string;
  persona: string;
  id: string;
  constructor() { }
}
