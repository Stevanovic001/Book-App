import { Component } from '@angular/core';
import { EBookStatus, IBook } from '../shared/models/Book';
import { UserService } from '../auth/user.service';
import { BookService } from '../services/book/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartSource = new MatTableDataSource<any>();
  displayedColumns = [ "cover","name", "author", "price", "Status", "Brisanje iz korpe" ];

  constructor(public userService:UserService,private bookService: BookService,private snack:MatSnackBar){
  }

  ngOnInit(): void {
    this.cartSource.data = this.userService.currentUser.cart;
    console.log(this.userService.currentUser.cart);
  }
  
  removeFromCart(bookName:string): void {
      var index = 0;
      for(let i=0; i<this.userService.currentUser.cart.length; i++){
          if(this.userService.currentUser.cart[i].name == bookName){
            index = i;
            break;
          }
      }
      if(this.userService.currentUser.cart[index].status === EBookStatus.PRISTIGLO || this.userService.currentUser.cart[index].status === EBookStatus.OTKAZANO){
        //this.userService.currentUser.cart[index]!.status = EBookStatus.U_TOKU;
        var x = this.userService.currentUser.cart.splice(index,1);
        this.snack.open("Uspesno ste obrisali knjigu iz korpe", "u redu", {duration: 3000});
        this.userService.total -= x[0].price;
        this.cartSource.data = this.userService.currentUser.cart;
      }
      else{
        this.snack.open("Ne mozete da obrisete knjigu iz korpe", "u redu", {duration: 3000});
      }
  }

  setStatus(): void {
      for(let i=0; i<this.userService.currentUser.cart.length; i++){
        this.userService.currentUser.cart[i].status = EBookStatus.PRISTIGLO ;

      }
  }

  otkazano(): void {
    for(let i=0; i<this.userService.currentUser.cart.length; i++){
      if(this.userService.currentUser.cart[i].status === EBookStatus.PRISTIGLO){
        this.snack.open("Ne mozete otkazati pristigle knjige", "u redu", {duration: 3000});
      } else{
      this.userService.currentUser.cart[i].status = EBookStatus.OTKAZANO
    }
  }

}

}
