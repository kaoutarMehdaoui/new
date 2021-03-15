import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public user : {email :string,username:string} = {email:'',username:''};
  constructor(private usersService: UsersService,private route:Router) { }

  ngOnInit(): void {
  }

public create() : void {
  this.usersService.add(this.user).subscribe(res => {
    this.route.navigate(['/users']); 
  })
}

}
