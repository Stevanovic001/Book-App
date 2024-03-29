import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    date: Date;
    phone: number;
    address?: string;
    cart: any[];
    favouriteGenres:any[];
}

@Injectable()
export class UserService {

    public currentUser: any = null;
    public total:number = 0;
    static dummyUserList: Array<User> = [
        {
            id: 0,
            email: "admin@mail.com",
            password: "1237894560",
            phone: 381628912065,
            date: new Date("2023-10-18 15:00"),
            cart: [],
            favouriteGenres:[],
        },
        {
            id: 1,
            email: "user@mail.com",
            password: "1237894560",
            phone: 381628912065,
            date: new Date("2023-10-18 15:00"),
            cart: [],
            favouriteGenres:[],
        }
    ];

    getUserName(user: User):string{
        return user.email;
    }

    getUserById(id: number) : User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if (user.id == id){
                foundUser = user;
            }
        });

        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User{
        /*return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;*/
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        console.log(this.currentUser);
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string): boolean {   
        return UserService.dummyUserList.find(userToFind =>
        (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(email: string, password: string, phone:number, date: Date,favouriteGenres:any[]) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if (maxId < user.id){
                maxId = user.id;
            }
        })

        var id = ++maxId;

        var user: User = {
            id,
            email,
            password,
            phone,
            date,
            cart:[],
            favouriteGenres:favouriteGenres,
        }

        UserService.dummyUserList.push(user);
        this.currentUser = user;
        console.log(user);
        return user;
    }
    logout() {
        this.currentUser = null;
    }

}