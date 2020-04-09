import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { personModel } from "./personModel.model";
import  *  as  data  from  './../data.json';
import { UpdatePersonService } from "./../update-person.service";

@Component({
  selector: "app-personlist",
  templateUrl: "./personlist.component.html",
  styleUrls: ["./personlist.component.css"]
})
export class PersonlistComponent implements OnInit {
  constructor(private updatePersonService: UpdatePersonService) {}
  personsList: personModel[] = [];
  show = false;
  searchTerm: string;
  selectedPersonDetails: any;
  @Output() updateSelectedPerson = new EventEmitter();
  ngOnInit() {
    let persons: personModel[] = (data as any).default;
    let id = 0;

    persons.forEach(person => {
      person.id = id++;
      this.personsList.push(this.createPerson(person));
    });

    persons.sort((a, b) => {
      if (a.name < b.name) return -1;
    });

    const selectedId = JSON.parse(window.localStorage.getItem("selectedId"));
    if (selectedId) {
      this.selectedPersonDetails = this.personsList.find(
        person => person.id === selectedId
      );
      this.updateSelectedPerson.emit(this.selectedPersonDetails);
    }

    this.updatePersonService.subject.subscribe(data => this.updateModel(data));
  }

  showDetails(id: number) {
    this.selectedPersonDetails = this.personsList.find(
      person => person.id === id
    );
    window.localStorage.setItem("selectedId", id.toString());
    this.updateSelectedPerson.emit(this.selectedPersonDetails);
  }

  createPerson(person:personModel): personModel {
    let personObj = new personModel();
    personObj.id = person.id;
    personObj.fName = person.fName;
    personObj.lName = person.lName;
    personObj.age = person.age;
    personObj.city = person.city;
    personObj.state = person.state;
    personObj.zip = person.zip;
    personObj.street = person.street;
    personObj.mobile = person.mobile;
    return personObj;
  }

  updateModel(data) {
    const person = (this.personsList.find(person => person.id === data.id));
    const index = this.personsList.indexOf(person);
    this.personsList[index] = this.createPerson(data);
    this.selectedPersonDetails = this.personsList[index];
    this.updateSelectedPerson.emit(this.selectedPersonDetails);
  }
}
