import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component,OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router } from "@angular/router";



@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatInputModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  model: any = {}

  constructor(
    private http: HttpClient,
    private route: Router) {}

    ngOnInit(): void {

    }

createPost() {
  this.model.date = new Date();
  this.http.post('http://localhost:5223/api/posts', this.model).subscribe(
    response => { this.home() },
    error => {console.log(error)}
  );
  console.log(this.model);
}

cancel() {
  this.home();
}

home() {
  this.route.navigate(["/"]);
}
}
