import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  formUsuario:FormGroup;
  numeroControl:FormGroup

  constructor(
    public formulario:FormBuilder,
    public nControl:FormBuilder,
     private CrudService:CrudService,
     ) {

    this.numeroControl=this.nControl.group({
      n_control:[],
    })

    this.formUsuario=this.formulario.group({
      nombres:[''],
      apellidos:[''],
      email:[''],
      verificacion:[]    
    })
  }

  ngOnInit(): void {
  }

  consultarUsuario():any{
    this.CrudService.ObtenerUsuario(this.numeroControl.value).subscribe(res=>{
    this.formUsuario.setValue({
      nombres:res["user"][0]["nombres"],
      apellidos:res["user"][0]["apellidos"],
      email:res["user"][0]["email"],
      verificacion:[]   
      })
    })
  }

  actualizarUsuario():any{
    this.formUsuario.value.verificacion = this.formUsuario.value.verificacion == true ? 1:0
    this.CrudService.ActualizarUsuario(this.formUsuario.value, this.numeroControl.value).subscribe()
    this.formUsuario.setValue({
      nombres:[''],
      apellidos:[''],
      email:[''],
      verificacion:[]   
      })
    this.numeroControl.setValue({
      n_control:[]
    })
  }

  eliminarUsuario():any{
    this.CrudService.BorrarUsuario(this.numeroControl.value).subscribe()
    this.formUsuario.setValue({
      nombres:[''],
      apellidos:[''],
      email:[''],
      verificacion:[]   
      })
    this.numeroControl.setValue({
        n_control:[]
      })
  }

}
