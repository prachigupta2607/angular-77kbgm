import { Component, OnInit, Input } from "@angular/core";
import { UpdatePersonService } from "./../update-person.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { personModel } from "../personlist/personModel.model";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"]
})
export class PersonComponent implements OnInit {
  personDetails: personModel;
  personDetailsForm: FormGroup;
  showDetails = true;
  @Input() set selectedPersonDetails(val: personModel) {
      this.personDetails = val;
      this.personDetailsForm = this.fb.group({
      firstName: [val.fName],
      lastName: [val.lName],
      age: [val.age],
      mobile: [val.mobile],
      address: this.fb.group({
        street: [val.street],
        city: [val.city],
        state: [val.state],
        zip: [val.zip]
      })
    });
  };

  constructor(
    private updatePersonService: UpdatePersonService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
  }

  editPersonDetail() {
    this.showDetails = !this.showDetails;
  }

  setUpdatedValues() {
    const controls= this.personDetailsForm.controls;
    const address = controls['address'].value;

    return {
      id: this.personDetails.id,
      fName: controls['firstName'].value,
      lName: controls['lastName'].value,
      age: controls['age'].value,
      mobile: controls['mobile'].value,
      street: address['street'],
      zip: address['zip'],
      city: address['city'],
      state: address['state'],
    }
  }

  handleDone() {
    this.showDetails = true;
    if(this.personDetailsForm.touched) {
      const updatedObj = this.setUpdatedValues();
      this.updatePersonService.updateDetails(updatedObj);
    }
  }
}
