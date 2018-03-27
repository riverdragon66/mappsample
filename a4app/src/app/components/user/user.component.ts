import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: false;

  constructor(private dataService: DataService) {
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'joe@joe.com';
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 1;
    this.address = {
      street: '123 Elm St',
      city: 'Augusta',
      state: 'Georgia',
      zip: 30901
    };

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.hobbies.push('Ham Radio');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
        }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}
interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userid: number;

}
