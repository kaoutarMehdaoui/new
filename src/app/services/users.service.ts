import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  find(page,size): Observable<any> {
    return this.http.get('http://localhost:3000/users?page='+page+'&size='+size);
  }
  add(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/users',body);
  }
  delete(id:string):Observable<any>{
    return this.http.delete('http://localhost:3000/users/'+id)
  }
  update(id:string,body:any):Observable<any>{
    return this.http.put('http://localhost:3000/users/'+id,body);
  }
  findbyid(id:string):Observable<any>{
    return this.http.get('http://localhost:3000/users/'+id);
  }
  count():Observable<any>{
    return this.http.get('http://localhost:3000/users/count');
  }
}
