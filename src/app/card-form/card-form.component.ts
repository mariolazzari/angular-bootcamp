import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl('')
  });

  constructor() {
    console.log(this.cardForm.get('name'));
  }

  ngOnInit() {}
}
