import { Component, OnInit } from '@angular/core';
import { Customers } from './customers'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customers = [];
  public customer = new Customers();
  public isEdit = false;
  public currentIndex;
  constructor(private route: Router) {

  }

  ngOnInit() {

  }

  AddCustomer(){
    this.customers.push(this.customer);
    this.customer = {
      firstName: '',
      lastName: ''
    }
  }
  deleteCustomer(element){
    const index = this.customers.indexOf(element);
    if(index !== -1){
      this.customers.splice(index, 1);
    }
  }

  editCustomer(element){
    this.isEdit = true;
    const index = this.customers.indexOf(element);
    if(index !== -1){
      this.customer.firstName = this.customers[index].firstName;
      this.customer.lastName = this.customers[index].lastName;
      this.currentIndex = index;
    }
  }
  updateCustomer(){
    this.customers.splice(this.currentIndex, 1, this.customer);
    this.customer = {
      firstName: '',
      lastName: ''
    }
    this.currentIndex = undefined;
    this.isEdit = false;
  }
}
