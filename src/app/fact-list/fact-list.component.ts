import { Component, OnInit } from '@angular/core';

import { Fact } from '../fact';
import { FactService } from '../fact.service';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.css']
})
export class FactListComponent implements OnInit {
  facts: Fact[] = [];

  constructor(private factService: FactService) { }

  ngOnInit() {
    // console.log(this.factService.getFacts());
    this.facts = this.factService.getFacts();
    this.factService.dataChanged.subscribe(
      (facts: Fact[]) => this.facts = facts
    );
  }

}
