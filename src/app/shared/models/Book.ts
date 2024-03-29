export interface IBook{
    id:number;
    name:string;
    price:number;
    genre:string;
    pages:number;
    author:string;
    date?:string;
    imageUrl:string;
    status: EBookStatus;
    rate : number;
}

export enum EBookStatus {
    PRISTIGLO = "PRISTIGLO",
    U_TOKU = "U TOKU",
    DEFAULT = "DEFAULT",
    OTKAZANO = "OTKAZANO",

}