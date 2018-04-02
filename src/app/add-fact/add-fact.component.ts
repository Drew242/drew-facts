import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Fact } from '../fact';
import { FactService } from '../fact.service';

@Component({
  selector: 'app-add-fact',
  templateUrl: './add-fact.component.html',
  styleUrls: ['./add-fact.component.css']
})
export class AddFactComponent implements OnInit {
  factForm: FormGroup;

  constructor(private factService: FactService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.factForm = new FormGroup({
      description: new FormControl()
    });
  }

  onSubmit() {
    const fact = new Fact('');
    fact.description = this.factForm.value.description;

    console.log(this.factForm.value.description);
    if (this.factForm.value.description.length < 4) {
      this.snackBar.open('Even swear words are 4 characters', 'Fact Not Saved', {
        duration: 2000,
      });
      return;
    }

    this.factService.addFact(fact).subscribe(
      () => this.snackBar.open(`${fact.description} added to Drew Facts`, 'Success', {
        duration: 2000,
      })
    );
    this.factForm.reset();
  }

}
