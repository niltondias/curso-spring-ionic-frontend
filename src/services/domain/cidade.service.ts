import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.cofig";
import { ClienteDTO } from "../../models/cliente.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CidadeService {

    constructor( public http: HttpClient ) {

    }

    findAll(estado_id: string) : Observable<ClienteDTO[]> {
        return this.http.get<ClienteDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }

}