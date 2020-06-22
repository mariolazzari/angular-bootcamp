import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  posts = [
    {
      title: 'Post 1',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.',
    },
    {
      title: 'Post 1',
      imageUrl: 'assets/mountain.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.',
    },
    {
      title: 'Post 1',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.',
    },
  ];

  ngOnInit(): void {}
}
