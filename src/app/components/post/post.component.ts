import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  clickedPost: Post;

  @Output()
  bubbleUp = new EventEmitter<Post>();

  constructor(private postService: PostService) { }

  getPostInfo(post: Post): void {
    this.bubbleUp.emit(post);
  }

  getPost(id): void{
    this.postService.getPostById(id).subscribe( value => this.clickedPost = value);
  }

  ngOnInit(): void {
  }

}
