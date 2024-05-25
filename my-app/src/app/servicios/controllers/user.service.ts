import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageDTO } from "../../dto/message-dto";
import { RegistroClienteDTO } from "../../dto/registro-cliente-dto";
import { Observable } from "rxjs";


@Injectable({providedIn:"root"})
export class UserService {
    private userUrl="https://programacionavanzada-proyectofinal.onrender.com/api/clientes";//apunta a localhost
   /*  private userUrl="http://localhost:8080/api/clientes"; */

    constructor (private http:HttpClient){

    }

    public registerUser(UserRegistrationDTO: RegistroClienteDTO): Observable<MessageDTO> {
        return this.http.post<MessageDTO>(`${this.userUrl}/registrar-cliente`, UserRegistrationDTO)
      }
}