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
  constructor(private http:HttpClient) { 
    console.log("Service is now ready!");
    this.username = "dennismwaniki67";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}