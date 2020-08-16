import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/models';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  @Input() ownerGender: string;
  @Input() pets: Pet[];

  constructor() { }

  ngOnInit(): void {
  }

}
