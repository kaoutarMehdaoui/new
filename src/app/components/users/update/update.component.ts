import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public user : {email :string,username:string} = {email:'',username:''};
  private id:string;
  constructor(private usersService: UsersService,private route:Router ,public router:ActivatedRoute) {
    this.id = this.router.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getuser();
  }
  public update() : void {
    console.log(this.id)
    this.usersService.update(this.id,this.user).subscribe(res => {
      this.route.navigate(['/users']); 
    })
  }
  private getuser() : void {
    this.usersService.findbyid(this.id).subscribe(user =>{
      this.user=user;
    })
  }
}
