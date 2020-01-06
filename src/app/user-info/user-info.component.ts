import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User;

  id = this.actRouter.snapshot.paramMap.get('id');
  idParse = parseInt(this.id);

  constructor(private actRouter: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getOne(this.idParse).subscribe(data => this.user = data.data)
  }

}
