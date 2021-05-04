import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm
  constructor(private fb: FormBuilder, private dataser: DataService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [],
      title: [],
      author: []
    })

    if (this.dataser.toUpdate) {
      this.userForm.controls['id'].setValue(this.dataser.toUpdate.id)
      this.userForm.controls['title'].setValue(this.dataser.toUpdate.title)
      this.userForm.controls['author'].setValue(this.dataser.toUpdate.author)
    }
  }
  savedata() {

    if (this.dataser.toUpdate) {
      this.dataser.put(this.dataser.toUpdate.id, this.userForm.value).subscribe(
        res => {
          this.dataser.toUpdate=undefined
          this.router.navigate(['viewAll'])
        }
      )
    } else {
      this.dataser.postData(this.userForm.value).subscribe(
        (res: any) => {
          if (res.id) {
            this.router.navigate(['viewAll'])
          }
        },
        err => {
          this.userForm.reset()
        }
      )
      console.log(this.userForm.value)
    }
  }
}
