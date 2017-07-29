import { FindPetsService } from './find-pets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-pets',
  templateUrl: './find-pets.component.html',
  styleUrls: ['./find-pets.component.css']
})
export class FindPetsComponent {
  private searchRes;
  private maleOwnerPets: Array<string> = [];
  private femaleOwnerPets: Array<string> = [];
  constructor(private findPetsService: FindPetsService) { }

  //Consume the service result and do the calculation for finding the male and female owners
  findPets() {
    this.maleOwnerPets = [];
    this.femaleOwnerPets = [];
    this.findPetsService.findPets().subscribe(result => {

      result.forEach((entry) => {
        if (entry.gender == "Male") {
          if (entry.pets) {
            entry.pets.forEach((pet) => {
              this.maleOwnerPets.push(pet.name);
            })
          }
        }
        else if (entry.gender == "Female") {
          if (entry.pets) {
            entry.pets.forEach((pet) => {
              this.femaleOwnerPets.push(pet.name);
            })
          }
        }
        this.maleOwnerPets = this.maleOwnerPets.sort();
        this.femaleOwnerPets =this.femaleOwnerPets.sort();
      }
      
    );
    });
  }
}
