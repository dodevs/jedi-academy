import { Component, OnInit, Input } from '@angular/core';

import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;
  /*
  @Input() name: string = 'Luke' as string;
  @Input() isJedi: boolean = true as boolean;
  */
  constructor() { }

  ngOnInit() {
  }

  clicked(): void {
    // this é o elemento onde aconteceu o evento
    console.log(`Student: ${this.student.name}`);
  }
}
