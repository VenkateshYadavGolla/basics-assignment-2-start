import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName (event: Event) {
    this.userName =  (<HTMLInputElement>event.target).value;
  }

  inputIsNotEmpty () {
    if (this.userName === '') {
      return true;
    }
  }

  clearInputBox () {
    this.userName = '';
  }

}
