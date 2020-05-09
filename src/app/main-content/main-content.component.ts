import { Component, OnInit } from '@angular/core';

interface Istudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<Istudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Paul',
        lastName: 'Salacup',
        course: 'Computer Information',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Kobe',
        lastName: 'Bryant',
        course: 'Basketball',
        editMode: false
      },
      {
        id: 3,
        firstName: 'George',
        lastName: 'Kittle',
        course: 'Football',
        editMode: false
      },
    ];
  }

  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }
  removeStudent(index: number) {
    console.log('index---->', index);
    this.studentArray.splice(index, 1);
  }

  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;

    this.sort();
  }
  sort() {
    this.studentArray.sort((a: Istudent, b: Istudent) => {
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
      // return a.id < b.id ? -1 : 1;
    });
  }
}
