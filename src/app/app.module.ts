import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PersonlistComponent } from "./personlist/personlist.component";
import { PersonFilterPipe } from "./filter.pipe";
import { PersonComponent } from './person/person.component';
import { UpdatePersonService } from './update-person.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, PersonlistComponent, PersonFilterPipe, PersonComponent],
  bootstrap: [AppComponent],
  providers: [UpdatePersonService]
})
export class AppModule {}
