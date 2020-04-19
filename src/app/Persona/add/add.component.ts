import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../Modelo/Persona'
import { ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {

  }
  persona:Persona = new Persona();
  Guardar(){
    this.service.createPersona(this.persona).subscribe(data=>{
      alert("Se ha agregado con exito a "+this.persona.nombre+" "+this.persona.apellidos);
      this.router.navigate(["listar"]);
  
    })
  } 
}
