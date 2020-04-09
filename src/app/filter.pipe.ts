import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "personFilter"
})
export class PersonFilterPipe implements PipeTransform {
  transform(persons, searchTerm: string) {
    if (!persons || !searchTerm) {
      return persons;
    }

    return persons.filter(
      person =>
        person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        person.mobile.indexOf(searchTerm) !== -1
    );
  }
}
