import { Component }  from'@angular/core';

@Component({
    selector: 'Micomponente',
    templateUrl: './componento.component.html',
    styleUrls: ['./component.css']
    })

export class Micomponente{

    public texto:String;
    public titulo:String ;
    public comentario: String ;
    year : number;
    lista : any;
    check : any;
    error : Boolean;
    errorText : String;

    add(){
        console.log(this.texto);
        if (this.texto !== ''){
        this.errorText = "";
        this.error=false;
        this.lista.push([this.texto,false]);
        this.texto = "";
        }else{
            this.errorText="Ingrese alguna tarea"; 
            this.error=true;
        }
    }

    borrar(i){
        console.log(i);
        this.lista.splice(i,1);
    }


    constructor(){
        this.titulo = "Hola";
        this.comentario = "Esto es epico";
        this.year =2020;
        this.lista = [];
        this.error = false;
        this.texto="";
        console.log("Componente Micomponente epico");
        console.log(this.titulo, this.comentario, this.year);
    }
}
