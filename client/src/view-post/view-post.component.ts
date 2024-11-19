import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute , RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent implements OnInit{
    post: any = {}

    constructor (
      private http: HttpClient,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.getPost();
    }

    getPost() {
      let id = this.route.snapshot.paramMap.get('id');
      this.http.get(`http:localhost:5289/api/posts/${id}`).subscribe({
        next: (response) => this.post = response,
        error: (e) => console.error(e),
        complete: () => console.log('complete')
      })
    }
}
