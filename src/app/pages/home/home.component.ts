import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any = null;
  userName!: string;
  error:string = "";

  constructor (
    private githubService: GithubService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }

  handleFind() {
    this.githubService.getUserDetails(this.userName).subscribe(
      (user:any) => {
        this.user = user;
        this.error = "";
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = "User Not Found"
        this.ref.detectChanges();
      }
    )
  }

}
