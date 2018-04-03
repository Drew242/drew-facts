import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Fact } from '../fact';
import { FactService } from '../fact.service';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  fact: Fact;

  constructor(private factService: FactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFact();
  }

  getFact() {
    const id = this.route.snapshot.paramMap.get('id');
    this.factService.getFact(id)
      .subscribe(
        (fact) => this.fact = fact
      );
  }

}
