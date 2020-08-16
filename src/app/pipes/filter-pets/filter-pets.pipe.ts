import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from 'src/app/models'; 

@Pipe({
  name: 'filterPets'
})
export class FilterPetsPipe implements PipeTransform {

  transform(value: Pet[], args?: any): unknown {
    
    var results = value;
 
    if (args.petType){
      results = results.filter(p=>p.type==args.petType);
    }
    
    if (args.ownerGender){
      results = results.filter(p=>p.ownerGender==args.ownerGender);
    }
    
    return results.sort((a, b) => a.name.localeCompare(b.name));
    
  }

}