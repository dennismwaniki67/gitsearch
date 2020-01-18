import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private client_id = "9ed2002f589731899060";
  private client_secret = "cb5cece365b5e188bcdb362de4b5053109e24d36";
  constructor() { }
}
