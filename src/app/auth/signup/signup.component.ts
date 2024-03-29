import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  errorExists = false;
  errorText = "";
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings={};
  dropDownForm!:FormGroup;
  genres:any[] = [];
  
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Knjige za decu' },
      { item_id: 2, item_text: 'Drama' },
      { item_id: 3, item_text: 'Klasici' },
      { item_id: 4, item_text: 'Beletristik' },
      { item_id: 5, item_text: 'Tinejdz' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      selectAllText: "Select All Items From List",
      unSelectAllText: "UnSelect All Items From List",
    };
    this.dropDownForm = this.fb.group({
      myItems: [this.selectedItems]
  });
  }

onItemSelect(item: any) {
    this.genres.push(item);
    console.log('onItemSelect', item);

}
onItemUnSelect(item: any) {
    let itemIndex = this.genres.indexOf(item,0);
    this.genres.splice(itemIndex,1);
    console.log('onItemDeSelect', item);
}
onSelectAll(items: any) {
    for(let i=0; i<items.length; i++) {
        this.genres.push(items[i]);
    }
    console.log('onSelectAll', items);
}
onUnSelectAll() {
    this.genres = [];
    console.log('onUnSelectAll fires');
}
  

  onSubmit(form: NgForm){
    if (!this.userService.getUser(form.value.email)){
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.email,
                                                  form.value.password,
                                                  form.value.phone,
                                                  form.value.birthDate,this.genres);
    this.router.navigate(['']);    
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists."
    }
  }
}
