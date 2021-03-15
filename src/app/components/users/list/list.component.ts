import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users: any;
  public size=20;
  public page=1;
  public total: number;
  public pages:Array<number>;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getpage(1)
    this.count();
  }

  private getAll(page:number,size:number): void {
    this.usersService.find(page,size).subscribe(users => {
      this.users = users;
    })
  }
  public delete(id):void{
    const a = confirm('');
      if(a){
    this.usersService.delete(id).subscribe(done =>{
      this.getAll(this.page,this.size);
    })}
  }
public getpage(page:number):void{
  this.page=page;
  this.getAll(page,this.size)
}

public count():void{
  this.usersService.count().subscribe(done =>{
    this.total=done.total;
    this.pages = [];
    for (var i = 1; i <= Math.ceil(this.total/this.size); i++) {
      this.pages.push(i);
    }
  })
}
}