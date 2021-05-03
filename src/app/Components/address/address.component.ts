import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm = this.fb.group({
    name: ['', [ Validators.required ]],
    address: ['', Validators.required],
  });
  addressFormVisible: boolean = false;
  addresses: string[];

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserById(localStorage.getItem("userId")).subscribe((val: User)=>{
      this.addresses = val.addresses;
    })
  }

  getAddressesCity(address): string{
    return address.split(" ")[0]
  }

  getAddresses(address): string{
    return address.split(" ")[1]
  }

  addAddress(){
    this.addressFormVisible = !this.addressFormVisible
  }

  onEditClick(address, i){
    event.preventDefault()
    this.addressFormVisible = true;
    this.addressForm.patchValue({
      name:this.getAddressesCity(address),
      address:this.getAddresses(address)
    })
  }

  saveAddress(){
    event.preventDefault();
    this.addresses.push(this.addressForm.value.name + this.addressForm.value.address);
  }

  onDeleteClick(i){
    event.preventDefault()
    this.addresses.splice(i, 1);
  }
}
