import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RateService } from '../service/rate.service';
import {first} from "rxjs/operators";
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './calculate-rate.component.html',
  styleUrls: ['./calculate-rate.component.css']
})
export class CalculateRateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private rateService: RateService) { }

  rateForm: FormGroup;
  resultRateApi: String = 'Loading Rate';

  ngOnInit() {

    this.rateForm = this.formBuilder.group({
      city: ['', Validators.required],
      speed: ['', Validators.required],
      passenger: ['', Validators.required],
      miles: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });

  }

  calculateRates() {

    this.rateService.createUser(this.rateForm.value)
      .subscribe( data => {
        this.resultRateApi = data.toString() + ' $';
      }, (err) => {
        console.log(err);
      });
  }

}
