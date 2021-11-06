import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, UsuarioMod } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost:4000/api/users'

  constructor(private clienteHttp:HttpClient) { }
  
  AgregarUsuario(datosUsuario:Usuario):Observable<any>{
    return this.clienteHttp.post(this.API, datosUsuario)
  }

  ObtenerUsuario(numeroControl:any):Observable<any>{
    return this.clienteHttp.get(this.API+"/"+numeroControl['n_control'])
  }

  BorrarUsuario(numeroControl:any):Observable<any>{
    return this.clienteHttp.delete(this.API+'/'+numeroControl['n_control'])
  }

  ActualizarUsuario(datosUsuariom:UsuarioMod, numeroControl:any):Observable<any>{
    return this.clienteHttp.put(this.API+'/'+numeroControl['n_control'],datosUsuariom)
  }


}
