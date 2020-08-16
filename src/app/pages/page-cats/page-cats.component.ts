import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeopleService } from 'src/app/services';
import { Pet } from 'src/app/models';


@Component({
  selector: 'app-cats',
  templateUrl: './page-cats.component.html',
  styleUrls: ['./page-cats.component.scss']
})
export class PageCatsComponent implements OnInit {

  pets$: Observable<Pet[]>;
  petType: string = "Cat";

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.pets$ = this.peopleService.getPeople()
      .pipe(
        map(people => {
          return people.reduce((acc, person) => {
            person.pets &&
              acc
                .push(...person.pets.map(p => {
                  return { ...p, ownerGender: person.gender }
                }));
            return acc;
          }, []);
        })
      )
  }

}
