import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  posts: Post[] = [];
  tags: string[] = [];
  selectedTag: string | null = null;

  @Output() filteredPostsEvent = new EventEmitter<Post[]>();

  constructor(private postSrv: PostService) {}

  async ngOnInit(): Promise<void> {
    this.posts = await this.postSrv.getPosts();
    this.tags = this.extractTags(this.posts);
  }

  extractTags(posts: Post[]): string[] {
    const tags: string[] = [];
    tags.push('All')
    posts.forEach(post => {
      post.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
    return tags;
  }

  filterTag(tag: string): void {
    let filteredPosts: Post[] = this.posts;
    if (tag !== 'All') {
      filteredPosts = this.posts.filter(post => post.tags.includes(tag));
    }
    this.filteredPostsEvent.emit(filteredPosts);
    this.selectedTag = tag;
  }
}
