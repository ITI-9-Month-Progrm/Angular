import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL = "http://localhost:3000/employee";

  constructor(private httpClient:HttpClient) { }

  getAllEmployee(){
   return this.httpClient.get(this.baseURL);

  }
  getEmployee(id){
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  addNewUser(emp){

    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(emp);
    console.log(body)
    return this.httpClient.post(this.baseURL, body,{'headers':headers})
  }

}
