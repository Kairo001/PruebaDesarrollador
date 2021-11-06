import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurmularioComponent } from './components/furmulario/furmulario.component';
import { ConsultarComponent } from './components/consultar/consultar.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'formulario'},
  {path: 'formulario', component: FurmularioComponent},
  {path: 'edit', component: ConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
