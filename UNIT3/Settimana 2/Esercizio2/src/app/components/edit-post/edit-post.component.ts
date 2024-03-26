import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
  @Input() post!: Post;
  @Output() postUpdated = new EventEmitter<Post>();

  saveChanges() {
    this.postUpdated.emit(this.post);
  }
}
