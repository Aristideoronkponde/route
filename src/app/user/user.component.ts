import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userId?:string
  users?:any[]
  constructor(
    private route: ActivatedRoute,
    private usersServise:HttpService
    ) {}
  
  ngOnInit():void {
    // {this.route.params.subscribe(params => {
    //     this.userId= params['id'];
    //     });
    //   }
    this.route.snapshot.paramMap.get('id') || '';
    // this.route.paramMap.subscribe(params => {})
    this.usersServise.getUsers().subscribe(users => {
      this.users=users
    })
  }

}
