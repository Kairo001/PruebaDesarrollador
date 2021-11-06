import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furmulario',
  templateUrl: './furmulario.component.html',
  styleUrls: ['./furmulario.component.css']
})
export class FurmularioComponent implements OnInit {
  formularioUsuario:FormGroup;

  constructor(
    public formulario:FormBuilder,
     private CrudService:CrudService,
     private routeador:Router
     ) {

    this.formularioUsuario=this.formulario.group({
      nombres:[''],
      apellidos:[''],
      email:[''],
      n_control:[],
      verificacion:[]    
    })

  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    this.formularioUsuario.value.verificacion = this.formularioUsuario.value.verificacion == true ? 1:0
    this.CrudService.AgregarUsuario(this.formularioUsuario.value).subscribe((res) => {})
    //this.routeador.navigateByUrl('/edit')
  }

  cancelar():any{
    this.formularioUsuario.setValue({
      nombres:[''],
      apellidos:[''],
      email:[''],
      n_control:[],
      verificacion:[]  
    })
  }
}
