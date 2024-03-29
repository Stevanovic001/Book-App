import { EBookStatus, IBook } from "src/app/shared/models/Book";

export class BookService {
  public books: IBook[] = [
    {
      id: 1,
      name: '1984',
      price: 9.00,
      genre: 'Drama',
      pages: 320,
      author: 'Dzordz Orvel',
      date: '19.08.2022.',
      imageUrl: '../../assets/images/1.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 2,
      name: 'Kad su cvetale tikve',
      price: 8.50,
      genre: 'Beletristika',
      pages: 160,
      author: 'Dragoslav Mihailovic',
      date: '05.06.2015.',
      imageUrl: '../../assets/images/2.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 3,
      name: 'Lovac u zitu',
      price: 9.80,
      genre: 'Klasici',
      pages: 235,
      author: 'Dz. D. Selindzer',
      date: '31.10.2016.',
      imageUrl: '../../assets/images/3.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 4,
      name: 'Majstor i Margarita',
      price: 1000.00,
      genre: 'Klasici',
      pages: 519,
      author: 'Mihail Bulgakov',
      date: '1.04.2020.',
      imageUrl: '../../assets/images/4.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 5,
      name: 'Nocna skola',
      price: 7.20,
      genre: 'Tinejdz',
      pages: 420,
      author: 'K. Dz. Doerti',
      date: '21.02.2013.',
      imageUrl: '../../assets/images/5.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 6,
      name: 'Persi Dzekson i bogovi Olimpa - Bitka za lavirint',
      price: 8.99,
      genre: 'Fantastika',
      pages: 352,
      author: 'Rik Riordan',
      date: '18.02.2020',
      imageUrl: '../../assets/images/6.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 7,
      name: 'Persi Dzekson i bogovi Olimpa - Poslednji Bog',
      price: 9.99,
      genre: 'Fantastika',
      pages: 376,
      author: 'Rik Riordan',
      date: '18.02.2020',
      imageUrl: '../../assets/images/7.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 8,
      name: 'Stranac',
      price: 4.56,
      genre: 'Klasici',
      pages: 102,
      author: 'Alber Kami',
      date: '31.05.2018.',
      imageUrl: '../../assets/images/8.png',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 9,
      name: 'Srecna smrt',
      price: 750.00,
      genre: 'Klasici',
      pages: 270,
      author: 'Alber Kami',
      date: '31.05.2018.',
      imageUrl: '../../assets/images/9.png',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 10,
      name: 'Hari Poter i relikvije smrti',
      price: 8.97,
      genre: 'Fantastika',
      pages: 608,
      author: 'Dz. K. Rouling Stouns',
      date: '31.07.2022.',
      imageUrl: '../../assets/images/10.png',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 11,
      name: 'Izabrana Dela II',
      price: 11.50,
      genre: 'Beletristika',
      pages: 704,
      author: 'Sestre Bronte',
      date: '26.05.2020.',
      imageUrl: '../../assets/images/11.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 12,
      name: 'Ana Karenjina ',
      price: 13.80,
      genre: 'Klasicna knjizevnost',
      pages: 896,
      author: 'Lav Tolstoj',
      date: '15.04.2020.',
      imageUrl: '../../assets/images/12.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 13,
      name: 'Robinson Kruso',
      price: 5.35,
      genre: 'Knjige za Decu',
      pages: 320,
      author: 'Danijel Defo',
      date: '28.10.2020.',
      imageUrl: '../../assets/images/13.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 14,
      name: 'Zivotinjska farma ',
      price: 4.58,
      genre: 'Klasika',
      pages: 160,
      author: 'Dzordz Orvel',
      date: '06.11.2021',
      imageUrl: '../../assets/images/14.jpg',
      status: EBookStatus.DEFAULT,
      rate: 2.50
    },
    {
      id: 15,
        name: 'Cica Gorio ',
        price: 7.50,
        genre: 'Fantastika',
        pages: 304,
        author: 'Onore De Balzak',
        date: '24.02.2023.',
        imageUrl: '../../assets/images/15.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },
      {
        id: 16,
        name: 'Zlocin i Kazna ',
        price: 15.90,
        genre: 'Drama',
        pages: 714,
        author: 'Fjodor Dostojevski',
        date: '17.05.2019',
        imageUrl: '../../assets/images/16.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },
      {
        id: 17,
        name: 'Zamak',
        price: 8.40,
        genre: 'Klasici',
        pages: 608,
        author: 'Franc Kafka',
        date: '31.07.2022.',
        imageUrl: '../../assets/images/17.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },
      {
        id: 18,
        name: 'Dnevnik o Carnojevicu',
        price: 5.67,
        genre: 'Fantastika',
        pages: 608,
        author: 'Milos Crnjanski',
        date: '31.07.2022.',
        imageUrl: '../../assets/images/18.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },
      {
        id: 19,
        name: 'Rat Svetova ',
        price: 6.89,
        genre: 'Fantastika',
        pages: 608,
        author: 'Herbert Dz. Vels',
        date: '31.07.2022.',
        imageUrl: '../../assets/images/19.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },
      {
        id: 20,
        name: 'Pokondirena tikva',
        price: 750.00,
        genre: 'Fantastika',
        pages: 608,
        author: 'Jovan Sterija Popovic',
        date: '31.07.2022.',
        imageUrl: '../../assets/images/20.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },
      {
        id: 21,
        name: 'Ljudi govore ',
        price: 8.79,
        genre: 'Fantastika',
        pages: 608,
        author: 'Rastko Petrovic',
        date: '31.07.2022.',
        imageUrl: '../../assets/images/21.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },
      {
        id: 22,
        name: 'Velika ocekivanja ',
        price: 9.99,
        genre: 'Fantastika',
        pages: 608,
        author: 'Carls Dikens',
        date: '31.07.2022.',
        imageUrl: '../../assets/images/22.jpg',
        status: EBookStatus.DEFAULT,
        rate: 2.50
      },

  ]


  getBooks() {
    return this.books;
  }

}